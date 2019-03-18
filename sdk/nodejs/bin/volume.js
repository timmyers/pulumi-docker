"use strict";
// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
class Volume extends pulumi.CustomResource {
    /**
     * Get an existing Volume resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name, id, state, opts) {
        return new Volume(name, state, Object.assign({}, opts, { id: id }));
    }
    constructor(name, argsOrState, opts) {
        let inputs = {};
        if (opts && opts.id) {
            const state = argsOrState;
            inputs["driver"] = state ? state.driver : undefined;
            inputs["driverOpts"] = state ? state.driverOpts : undefined;
            inputs["labels"] = state ? state.labels : undefined;
            inputs["mountpoint"] = state ? state.mountpoint : undefined;
            inputs["name"] = state ? state.name : undefined;
        }
        else {
            const args = argsOrState;
            inputs["driver"] = args ? args.driver : undefined;
            inputs["driverOpts"] = args ? args.driverOpts : undefined;
            inputs["labels"] = args ? args.labels : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["mountpoint"] = undefined /*out*/;
        }
        super("docker:index/volume:Volume", name, inputs, opts);
    }
}
exports.Volume = Volume;
//# sourceMappingURL=volume.js.map