import * as pulumi from "@pulumi/pulumi";
export declare class Volume extends pulumi.CustomResource {
    /**
     * Get an existing Volume resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VolumeState, opts?: pulumi.CustomResourceOptions): Volume;
    readonly driver: pulumi.Output<string>;
    readonly driverOpts: pulumi.Output<{
        [key: string]: any;
    } | undefined>;
    readonly labels: pulumi.Output<{
        [key: string]: any;
    } | undefined>;
    readonly mountpoint: pulumi.Output<string>;
    readonly name: pulumi.Output<string>;
    /**
     * Create a Volume resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: VolumeArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Volume resources.
 */
export interface VolumeState {
    readonly driver?: pulumi.Input<string>;
    readonly driverOpts?: pulumi.Input<{
        [key: string]: any;
    }>;
    readonly labels?: pulumi.Input<{
        [key: string]: any;
    }>;
    readonly mountpoint?: pulumi.Input<string>;
    readonly name?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Volume resource.
 */
export interface VolumeArgs {
    readonly driver?: pulumi.Input<string>;
    readonly driverOpts?: pulumi.Input<{
        [key: string]: any;
    }>;
    readonly labels?: pulumi.Input<{
        [key: string]: any;
    }>;
    readonly name?: pulumi.Input<string>;
}
