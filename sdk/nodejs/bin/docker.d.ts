import * as pulumi from "@pulumi/pulumi";
export interface Registry {
    registry: pulumi.Input<string>;
    username: pulumi.Input<string>;
    password: pulumi.Input<string>;
}
/**
 * CacheFrom may be used to specify build stages to use for the Docker build cache. The final image
 * is always implicitly included.
 */
export interface CacheFrom {
    /**
     * An optional list of build stages to use for caching. Each build stage in this list will be
     * built explicitly and pushed to the target repository. A given stage's image will be tagged as
     * "[stage-name]".
     */
    stages?: pulumi.Input<pulumi.Input<string>[]>;
}
/**
 * DockerBuild may be used to specify detailed instructions about how to build a container.
 */
export interface DockerBuild {
    /**
     * context is a path to a directory to use for the Docker build context, usually the directory
     * in which the Dockerfile resides (although dockerfile may be used to choose a custom location
     * independent of this choice). If not specified, the context defaults to the current working
     * directory; if a relative path is used, it is relative to the current working directory that
     * Pulumi is evaluating.
     */
    context?: pulumi.Input<string>;
    /**
     * dockerfile may be used to override the default Dockerfile name and/or location.  By default,
     * it is assumed to be a file named Dockerfile in the root of the build context.
     */
    dockerfile?: pulumi.Input<string>;
    /**
     * An optional map of named build-time argument variables to set during the Docker build.  This
     * flag allows you to pass built-time variables that can be accessed like environment variables
     * inside the `RUN` instruction.
     */
    args?: pulumi.Input<Record<string, pulumi.Input<string>>>;
    /**
     * An optional CacheFrom object with information about the build stages to use for the Docker
     * build cache. This parameter maps to the --cache-from argument to the Docker CLI. If this
     * parameter is `true`, only the final image will be pulled and passed to --cache-from; if it is
     * a CacheFrom object, the stages named therein will also be pulled and passed to --cache-from.
     */
    cacheFrom?: pulumi.Input<boolean | CacheFrom>;
    /**
     * An optional catch-all string to provide extra CLI options to the docker build command.  For
     * example, use to specify `--network host`.
     */
    extraOptions?: pulumi.Input<string[]>;
}
/**
 * @deprecated Use [buildAndPushImage] instead.  This function loses the Output resource tracking
 * information from [pathOrBuild] and [repositoryUrl].  [buildAndPushImage] properly keeps track of
 * this in the result.
 */
export declare function buildAndPushImageAsync(baseImageName: string, pathOrBuild: pulumi.Input<string | DockerBuild>, repositoryUrl: pulumi.Input<string>, logResource: pulumi.Resource, connectToRegistry?: () => pulumi.Input<Registry>): Promise<string>;
/**
 * buildAndPushImage will build and push the Dockerfile and context from [pathOrBuild] into the
 * requested docker repo [repositoryUrl].  It returns the unique target image name for the image in
 * the docker repository.  During preview this will build the image, and return the target image
 * name, without pushing. During a normal update, it will do the same, as well as tag and push the
 * image.
 */
export declare function buildAndPushImage(imageName: string, pathOrBuild: pulumi.Input<string | DockerBuild>, repositoryUrl: pulumi.Input<string>, logResource: pulumi.Resource, connectToRegistry?: () => pulumi.Input<Registry>): pulumi.Output<string>;
