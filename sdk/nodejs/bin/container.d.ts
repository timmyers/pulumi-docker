import * as pulumi from "@pulumi/pulumi";
export declare class Container extends pulumi.CustomResource {
    /**
     * Get an existing Container resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ContainerState, opts?: pulumi.CustomResourceOptions): Container;
    readonly attach: pulumi.Output<boolean | undefined>;
    readonly bridge: pulumi.Output<string>;
    readonly capabilities: pulumi.Output<{
        adds?: string[];
        drops?: string[];
    } | undefined>;
    readonly command: pulumi.Output<string[] | undefined>;
    readonly containerLogs: pulumi.Output<string>;
    readonly cpuSet: pulumi.Output<string | undefined>;
    readonly cpuShares: pulumi.Output<number | undefined>;
    readonly destroyGraceSeconds: pulumi.Output<number | undefined>;
    readonly devices: pulumi.Output<{
        containerPath?: string;
        hostPath: string;
        permissions?: string;
    }[] | undefined>;
    readonly dns: pulumi.Output<string[] | undefined>;
    readonly dnsOpts: pulumi.Output<string[] | undefined>;
    readonly dnsSearches: pulumi.Output<string[] | undefined>;
    readonly domainname: pulumi.Output<string | undefined>;
    readonly entrypoints: pulumi.Output<string[] | undefined>;
    readonly envs: pulumi.Output<string[] | undefined>;
    readonly exitCode: pulumi.Output<number>;
    readonly gateway: pulumi.Output<string>;
    /**
     * A test to perform to check that the container is healthy
     */
    readonly healthcheck: pulumi.Output<{
        interval?: string;
        retries?: number;
        startPeriod?: string;
        tests: string[];
        timeout?: string;
    } | undefined>;
    readonly hosts: pulumi.Output<{
        host: string;
        ip: string;
    }[] | undefined>;
    readonly hostname: pulumi.Output<string | undefined>;
    readonly image: pulumi.Output<string>;
    readonly ipAddress: pulumi.Output<string>;
    readonly ipPrefixLength: pulumi.Output<number>;
    readonly labels: pulumi.Output<{
        [key: string]: any;
    } | undefined>;
    readonly links: pulumi.Output<string[] | undefined>;
    readonly logDriver: pulumi.Output<string | undefined>;
    readonly logOpts: pulumi.Output<{
        [key: string]: any;
    } | undefined>;
    readonly logs: pulumi.Output<boolean | undefined>;
    readonly maxRetryCount: pulumi.Output<number | undefined>;
    readonly memory: pulumi.Output<number | undefined>;
    readonly memorySwap: pulumi.Output<number | undefined>;
    readonly mustRun: pulumi.Output<boolean | undefined>;
    readonly name: pulumi.Output<string>;
    /**
     * Set an alias for the container in all specified networks
     */
    readonly networkAliases: pulumi.Output<string[] | undefined>;
    readonly networkDatas: pulumi.Output<{
        gateway: string;
        ipAddress: string;
        ipPrefixLength: number;
        networkName: string;
    }[]>;
    readonly networkMode: pulumi.Output<string | undefined>;
    readonly networks: pulumi.Output<string[] | undefined>;
    readonly networksAdvanced: pulumi.Output<{
        aliases?: string[];
        ipv4Address?: string;
        ipv6Address?: string;
        name: string;
    }[] | undefined>;
    readonly pidMode: pulumi.Output<string | undefined>;
    readonly ports: pulumi.Output<{
        external: number;
        internal: number;
        ip?: string;
        protocol?: string;
    }[] | undefined>;
    readonly privileged: pulumi.Output<boolean | undefined>;
    readonly publishAllPorts: pulumi.Output<boolean | undefined>;
    readonly restart: pulumi.Output<string | undefined>;
    readonly rm: pulumi.Output<boolean | undefined>;
    readonly start: pulumi.Output<boolean | undefined>;
    readonly ulimits: pulumi.Output<{
        hard: number;
        name: string;
        soft: number;
    }[] | undefined>;
    readonly uploads: pulumi.Output<{
        content: string;
        executable?: boolean;
        file: string;
    }[] | undefined>;
    readonly user: pulumi.Output<string | undefined>;
    readonly usernsMode: pulumi.Output<string | undefined>;
    readonly volumes: pulumi.Output<{
        containerPath?: string;
        fromContainer?: string;
        hostPath?: string;
        readOnly?: boolean;
        volumeName?: string;
    }[] | undefined>;
    /**
     * Create a Container resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ContainerArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Container resources.
 */
export interface ContainerState {
    readonly attach?: pulumi.Input<boolean>;
    readonly bridge?: pulumi.Input<string>;
    readonly capabilities?: pulumi.Input<{
        adds?: pulumi.Input<pulumi.Input<string>[]>;
        drops?: pulumi.Input<pulumi.Input<string>[]>;
    }>;
    readonly command?: pulumi.Input<pulumi.Input<string>[]>;
    readonly containerLogs?: pulumi.Input<string>;
    readonly cpuSet?: pulumi.Input<string>;
    readonly cpuShares?: pulumi.Input<number>;
    readonly destroyGraceSeconds?: pulumi.Input<number>;
    readonly devices?: pulumi.Input<pulumi.Input<{
        containerPath?: pulumi.Input<string>;
        hostPath: pulumi.Input<string>;
        permissions?: pulumi.Input<string>;
    }>[]>;
    readonly dns?: pulumi.Input<pulumi.Input<string>[]>;
    readonly dnsOpts?: pulumi.Input<pulumi.Input<string>[]>;
    readonly dnsSearches?: pulumi.Input<pulumi.Input<string>[]>;
    readonly domainname?: pulumi.Input<string>;
    readonly entrypoints?: pulumi.Input<pulumi.Input<string>[]>;
    readonly envs?: pulumi.Input<pulumi.Input<string>[]>;
    readonly exitCode?: pulumi.Input<number>;
    readonly gateway?: pulumi.Input<string>;
    /**
     * A test to perform to check that the container is healthy
     */
    readonly healthcheck?: pulumi.Input<{
        interval?: pulumi.Input<string>;
        retries?: pulumi.Input<number>;
        startPeriod?: pulumi.Input<string>;
        tests: pulumi.Input<pulumi.Input<string>[]>;
        timeout?: pulumi.Input<string>;
    }>;
    readonly hosts?: pulumi.Input<pulumi.Input<{
        host: pulumi.Input<string>;
        ip: pulumi.Input<string>;
    }>[]>;
    readonly hostname?: pulumi.Input<string>;
    readonly image?: pulumi.Input<string>;
    readonly ipAddress?: pulumi.Input<string>;
    readonly ipPrefixLength?: pulumi.Input<number>;
    readonly labels?: pulumi.Input<{
        [key: string]: any;
    }>;
    readonly links?: pulumi.Input<pulumi.Input<string>[]>;
    readonly logDriver?: pulumi.Input<string>;
    readonly logOpts?: pulumi.Input<{
        [key: string]: any;
    }>;
    readonly logs?: pulumi.Input<boolean>;
    readonly maxRetryCount?: pulumi.Input<number>;
    readonly memory?: pulumi.Input<number>;
    readonly memorySwap?: pulumi.Input<number>;
    readonly mustRun?: pulumi.Input<boolean>;
    readonly name?: pulumi.Input<string>;
    /**
     * Set an alias for the container in all specified networks
     */
    readonly networkAliases?: pulumi.Input<pulumi.Input<string>[]>;
    readonly networkDatas?: pulumi.Input<pulumi.Input<{
        gateway?: pulumi.Input<string>;
        ipAddress?: pulumi.Input<string>;
        ipPrefixLength?: pulumi.Input<number>;
        networkName?: pulumi.Input<string>;
    }>[]>;
    readonly networkMode?: pulumi.Input<string>;
    readonly networks?: pulumi.Input<pulumi.Input<string>[]>;
    readonly networksAdvanced?: pulumi.Input<pulumi.Input<{
        aliases?: pulumi.Input<pulumi.Input<string>[]>;
        ipv4Address?: pulumi.Input<string>;
        ipv6Address?: pulumi.Input<string>;
        name: pulumi.Input<string>;
    }>[]>;
    readonly pidMode?: pulumi.Input<string>;
    readonly ports?: pulumi.Input<pulumi.Input<{
        external?: pulumi.Input<number>;
        internal: pulumi.Input<number>;
        ip?: pulumi.Input<string>;
        protocol?: pulumi.Input<string>;
    }>[]>;
    readonly privileged?: pulumi.Input<boolean>;
    readonly publishAllPorts?: pulumi.Input<boolean>;
    readonly restart?: pulumi.Input<string>;
    readonly rm?: pulumi.Input<boolean>;
    readonly start?: pulumi.Input<boolean>;
    readonly ulimits?: pulumi.Input<pulumi.Input<{
        hard: pulumi.Input<number>;
        name: pulumi.Input<string>;
        soft: pulumi.Input<number>;
    }>[]>;
    readonly uploads?: pulumi.Input<pulumi.Input<{
        content: pulumi.Input<string>;
        executable?: pulumi.Input<boolean>;
        file: pulumi.Input<string>;
    }>[]>;
    readonly user?: pulumi.Input<string>;
    readonly usernsMode?: pulumi.Input<string>;
    readonly volumes?: pulumi.Input<pulumi.Input<{
        containerPath?: pulumi.Input<string>;
        fromContainer?: pulumi.Input<string>;
        hostPath?: pulumi.Input<string>;
        readOnly?: pulumi.Input<boolean>;
        volumeName?: pulumi.Input<string>;
    }>[]>;
}
/**
 * The set of arguments for constructing a Container resource.
 */
export interface ContainerArgs {
    readonly attach?: pulumi.Input<boolean>;
    readonly capabilities?: pulumi.Input<{
        adds?: pulumi.Input<pulumi.Input<string>[]>;
        drops?: pulumi.Input<pulumi.Input<string>[]>;
    }>;
    readonly command?: pulumi.Input<pulumi.Input<string>[]>;
    readonly cpuSet?: pulumi.Input<string>;
    readonly cpuShares?: pulumi.Input<number>;
    readonly destroyGraceSeconds?: pulumi.Input<number>;
    readonly devices?: pulumi.Input<pulumi.Input<{
        containerPath?: pulumi.Input<string>;
        hostPath: pulumi.Input<string>;
        permissions?: pulumi.Input<string>;
    }>[]>;
    readonly dns?: pulumi.Input<pulumi.Input<string>[]>;
    readonly dnsOpts?: pulumi.Input<pulumi.Input<string>[]>;
    readonly dnsSearches?: pulumi.Input<pulumi.Input<string>[]>;
    readonly domainname?: pulumi.Input<string>;
    readonly entrypoints?: pulumi.Input<pulumi.Input<string>[]>;
    readonly envs?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A test to perform to check that the container is healthy
     */
    readonly healthcheck?: pulumi.Input<{
        interval?: pulumi.Input<string>;
        retries?: pulumi.Input<number>;
        startPeriod?: pulumi.Input<string>;
        tests: pulumi.Input<pulumi.Input<string>[]>;
        timeout?: pulumi.Input<string>;
    }>;
    readonly hosts?: pulumi.Input<pulumi.Input<{
        host: pulumi.Input<string>;
        ip: pulumi.Input<string>;
    }>[]>;
    readonly hostname?: pulumi.Input<string>;
    readonly image: pulumi.Input<string>;
    readonly labels?: pulumi.Input<{
        [key: string]: any;
    }>;
    readonly links?: pulumi.Input<pulumi.Input<string>[]>;
    readonly logDriver?: pulumi.Input<string>;
    readonly logOpts?: pulumi.Input<{
        [key: string]: any;
    }>;
    readonly logs?: pulumi.Input<boolean>;
    readonly maxRetryCount?: pulumi.Input<number>;
    readonly memory?: pulumi.Input<number>;
    readonly memorySwap?: pulumi.Input<number>;
    readonly mustRun?: pulumi.Input<boolean>;
    readonly name?: pulumi.Input<string>;
    /**
     * Set an alias for the container in all specified networks
     */
    readonly networkAliases?: pulumi.Input<pulumi.Input<string>[]>;
    readonly networkMode?: pulumi.Input<string>;
    readonly networks?: pulumi.Input<pulumi.Input<string>[]>;
    readonly networksAdvanced?: pulumi.Input<pulumi.Input<{
        aliases?: pulumi.Input<pulumi.Input<string>[]>;
        ipv4Address?: pulumi.Input<string>;
        ipv6Address?: pulumi.Input<string>;
        name: pulumi.Input<string>;
    }>[]>;
    readonly pidMode?: pulumi.Input<string>;
    readonly ports?: pulumi.Input<pulumi.Input<{
        external?: pulumi.Input<number>;
        internal: pulumi.Input<number>;
        ip?: pulumi.Input<string>;
        protocol?: pulumi.Input<string>;
    }>[]>;
    readonly privileged?: pulumi.Input<boolean>;
    readonly publishAllPorts?: pulumi.Input<boolean>;
    readonly restart?: pulumi.Input<string>;
    readonly rm?: pulumi.Input<boolean>;
    readonly start?: pulumi.Input<boolean>;
    readonly ulimits?: pulumi.Input<pulumi.Input<{
        hard: pulumi.Input<number>;
        name: pulumi.Input<string>;
        soft: pulumi.Input<number>;
    }>[]>;
    readonly uploads?: pulumi.Input<pulumi.Input<{
        content: pulumi.Input<string>;
        executable?: pulumi.Input<boolean>;
        file: pulumi.Input<string>;
    }>[]>;
    readonly user?: pulumi.Input<string>;
    readonly usernsMode?: pulumi.Input<string>;
    readonly volumes?: pulumi.Input<pulumi.Input<{
        containerPath?: pulumi.Input<string>;
        fromContainer?: pulumi.Input<string>;
        hostPath?: pulumi.Input<string>;
        readOnly?: pulumi.Input<boolean>;
        volumeName?: pulumi.Input<string>;
    }>[]>;
}
