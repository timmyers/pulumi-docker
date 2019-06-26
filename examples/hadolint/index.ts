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

import * as docker from "@pulumi/docker";
import * as pulumi from "@pulumi/pulumi";

class LocalImage extends pulumi.ComponentResource {
  public constructor(name: string, {}, opts?: pulumi.ComponentResourceOptions) {
    super('docker:image:LocalImage', name, { }, opts);

    const config = new pulumi.Config("hadolint")
    const dockerfile = config.require("goodDockerfile") === "true" ? "Dockerfile.good" : "Dockerfile.bad";

    let cacheFrom = Promise.resolve<string[] | undefined>(undefined);
    docker.buildImageAsync("hadolint-test", {
      dockerfile,
      context: ".",
      hadolint: true,
    }, this, cacheFrom)
  }
}

const img = new LocalImage('hadolint', {}, {});
