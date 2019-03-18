"use strict";
// Copyright 2016-2018, Pulumi Corporation.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
const docker = require("./docker");
const utils = require("./utils");
/**
 * A docker.Image resource represents a Docker image built locally which is published and made
 * available via a remote Docker registry.  This can be used to ensure that a Docker source
 * directory from a local deployment environment is built and pushed to a cloud-hosted Docker
 * registry as part of a Pulumi deployment, so that it can be referenced as an image input from
 * other cloud services that reference Docker images - including Kubernetes Pods, AWS ECS Tasks, and
 * Azure Container Instances.
 */
class Image extends pulumi.ComponentResource {
    constructor(name, args, opts) {
        super("docker:image:Image", name, {}, opts);
        const imageData = pulumi.output(args).apply((imageArgs) => __awaiter(this, void 0, void 0, function* () {
            const imageName = imageArgs.imageName;
            // If there is no localImageName set it equal to imageName.  Note: this means
            // that if imageName contains a tag, localImageName will contain the same tag.
            const localImageName = imageArgs.localImageName || imageName;
            // Now break both the localImageName and the imageName into the untagged part and the
            // optional tag.  If both have tags, they must match.  If one or the other has a tag, we
            // just use that as the tag to use.  This allows users to flexibly provide a tag on one
            // option or the other and still have it work out.
            const { imageName: localImageNameWithoutTag, tag: localImageNameTag } = utils.getImageNameAndTag(localImageName);
            const { imageName: imageNameWithoutTag, tag: imageNameTag } = utils.getImageNameAndTag(imageName);
            const tag = localImageNameTag || imageNameTag;
            checkTag(localImageNameTag);
            checkTag(imageNameTag);
            // buildAndPushImageAsync expects only the baseImageName to have a tag.  So build that
            // name appropriately if we were given a tag.
            const baseImageName = tag ? `${localImageNameWithoutTag}:${tag}` : localImageName;
            // buildAndPushImageAsync does not want the repositoryUrl to have a tag.  This is just
            // the base url where the images will be pushed to.  All tagging will be taken care of
            // inside that api.
            const repositoryUrl = imageNameWithoutTag;
            const registry = imageArgs.registry;
            const uniqueTargetName = yield docker.buildAndPushImageAsync(baseImageName, imageArgs.build, repositoryUrl, 
            /*logResource:*/ this, registry && (() => __awaiter(this, void 0, void 0, function* () {
                return {
                    registry: registry.server,
                    username: registry.username,
                    password: registry.password,
                };
            })));
            return { uniqueTargetName, registryServer: registry && registry.server };
            function checkTag(t) {
                if (t && (t !== tag)) {
                    throw new Error(`[localImageName] and [imageName] had mismatched tags.
    ${JSON.stringify(localImageNameTag)} !== ${JSON.stringify(imageNameTag)}`);
                }
            }
        }));
        this.imageName = imageData.uniqueTargetName;
        this.id = this.imageName;
        this.digest = this.imageName;
        this.registryServer = imageData.registryServer;
        this.baseImageName = pulumi.output(args.imageName);
        this.registerOutputs({
            baseImageName: this.baseImageName,
            imageName: this.imageName,
            id: this.id,
            digest: this.digest,
            registryServer: this.registryServer,
        });
    }
}
exports.Image = Image;
//# sourceMappingURL=image.js.map