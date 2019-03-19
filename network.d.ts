import * as pulumi from "@pulumi/pulumi";
export declare class Network extends pulumi.CustomResource {
    /**
     * Get an existing Network resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NetworkState, opts?: pulumi.CustomResourceOptions): Network;
    readonly attachable: pulumi.Output<boolean | undefined>;
    readonly checkDuplicate: pulumi.Output<boolean | undefined>;
    readonly driver: pulumi.Output<string>;
    readonly ingress: pulumi.Output<boolean | undefined>;
    readonly internal: pulumi.Output<boolean>;
    readonly ipamConfigs: pulumi.Output<{
        auxAddress?: {
            [key: string]: any;
        };
        gateway?: string;
        ipRange?: string;
        subnet?: string;
    }[] | undefined>;
    readonly ipamDriver: pulumi.Output<string | undefined>;
    readonly ipv6: pulumi.Output<boolean | undefined>;
    readonly labels: pulumi.Output<{
        [key: string]: any;
    } | undefined>;
    readonly name: pulumi.Output<string>;
    readonly options: pulumi.Output<{
        [key: string]: any;
    }>;
    readonly scope: pulumi.Output<string>;
    /**
     * Create a Network resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: NetworkArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Network resources.
 */
export interface NetworkState {
    readonly attachable?: pulumi.Input<boolean>;
    readonly checkDuplicate?: pulumi.Input<boolean>;
    readonly driver?: pulumi.Input<string>;
    readonly ingress?: pulumi.Input<boolean>;
    readonly internal?: pulumi.Input<boolean>;
    readonly ipamConfigs?: pulumi.Input<pulumi.Input<{
        auxAddress?: pulumi.Input<{
            [key: string]: any;
        }>;
        gateway?: pulumi.Input<string>;
        ipRange?: pulumi.Input<string>;
        subnet?: pulumi.Input<string>;
    }>[]>;
    readonly ipamDriver?: pulumi.Input<string>;
    readonly ipv6?: pulumi.Input<boolean>;
    readonly labels?: pulumi.Input<{
        [key: string]: any;
    }>;
    readonly name?: pulumi.Input<string>;
    readonly options?: pulumi.Input<{
        [key: string]: any;
    }>;
    readonly scope?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Network resource.
 */
export interface NetworkArgs {
    readonly attachable?: pulumi.Input<boolean>;
    readonly checkDuplicate?: pulumi.Input<boolean>;
    readonly driver?: pulumi.Input<string>;
    readonly ingress?: pulumi.Input<boolean>;
    readonly internal?: pulumi.Input<boolean>;
    readonly ipamConfigs?: pulumi.Input<pulumi.Input<{
        auxAddress?: pulumi.Input<{
            [key: string]: any;
        }>;
        gateway?: pulumi.Input<string>;
        ipRange?: pulumi.Input<string>;
        subnet?: pulumi.Input<string>;
    }>[]>;
    readonly ipamDriver?: pulumi.Input<string>;
    readonly ipv6?: pulumi.Input<boolean>;
    readonly labels?: pulumi.Input<{
        [key: string]: any;
    }>;
    readonly name?: pulumi.Input<string>;
    readonly options?: pulumi.Input<{
        [key: string]: any;
    }>;
}
