import * as pulumi from "@pulumi/pulumi";
export declare class RemoteImage extends pulumi.CustomResource {
    /**
     * Get an existing RemoteImage resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RemoteImageState, opts?: pulumi.CustomResourceOptions): RemoteImage;
    readonly keepLocally: pulumi.Output<boolean | undefined>;
    readonly latest: pulumi.Output<string>;
    readonly name: pulumi.Output<string>;
    readonly pullTrigger: pulumi.Output<string | undefined>;
    readonly pullTriggers: pulumi.Output<string[] | undefined>;
    /**
     * Create a RemoteImage resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RemoteImageArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering RemoteImage resources.
 */
export interface RemoteImageState {
    readonly keepLocally?: pulumi.Input<boolean>;
    readonly latest?: pulumi.Input<string>;
    readonly name?: pulumi.Input<string>;
    readonly pullTrigger?: pulumi.Input<string>;
    readonly pullTriggers?: pulumi.Input<pulumi.Input<string>[]>;
}
/**
 * The set of arguments for constructing a RemoteImage resource.
 */
export interface RemoteImageArgs {
    readonly keepLocally?: pulumi.Input<boolean>;
    readonly name: pulumi.Input<string>;
    readonly pullTrigger?: pulumi.Input<string>;
    readonly pullTriggers?: pulumi.Input<pulumi.Input<string>[]>;
}
