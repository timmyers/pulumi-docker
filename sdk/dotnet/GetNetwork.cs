// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Docker
{
    public static partial class Invokes
    {
        /// <summary>
        /// Finds a specific docker network and returns information about it.
        /// 
        /// &gt; This content is derived from https://github.com/terraform-providers/terraform-provider-docker/blob/master/website/docs/d/network.html.markdown.
        /// </summary>
        public static Task<GetNetworkResult> GetNetwork(GetNetworkArgs? args = null, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetNetworkResult>("docker:index/getNetwork:getNetwork", args ?? InvokeArgs.Empty, options.WithVersion());
    }

    public sealed class GetNetworkArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The id of the Docker network.
        /// </summary>
        [Input("id")]
        public string? Id { get; set; }

        [Input("ipamConfigs")]
        private List<Inputs.GetNetworkIpamConfigsArgs>? _ipamConfigs;
        public List<Inputs.GetNetworkIpamConfigsArgs> IpamConfigs
        {
            get => _ipamConfigs ?? (_ipamConfigs = new List<Inputs.GetNetworkIpamConfigsArgs>());
            set => _ipamConfigs = value;
        }

        /// <summary>
        /// The name of the Docker network.
        /// </summary>
        [Input("name")]
        public string? Name { get; set; }

        public GetNetworkArgs()
        {
        }
    }

    [OutputType]
    public sealed class GetNetworkResult
    {
        /// <summary>
        /// (Optional, string) The driver of the Docker network. 
        /// Possible values are `bridge`, `host`, `overlay`, `macvlan`.
        /// See [docker docs][networkdocs] for more details.
        /// </summary>
        public readonly string Driver;
        public readonly string? Id;
        public readonly bool Internal;
        public readonly ImmutableArray<Outputs.GetNetworkIpamConfigsResult> IpamConfigs;
        public readonly string? Name;
        /// <summary>
        /// (Optional, map) Only available with bridge networks. See
        /// [docker docs][bridgeoptionsdocs] for more details.
        /// * `internal` (Optional, bool) Boolean flag for whether the network is internal.
        /// * `ipam_config` (Optional, map) See IPAM below for details.
        /// * `scope` (Optional, string) Scope of the network. One of `swarm`, `global`, or `local`.
        /// </summary>
        public readonly ImmutableDictionary<string, object> Options;
        public readonly string Scope;

        [OutputConstructor]
        private GetNetworkResult(
            string driver,
            string? id,
            bool @internal,
            ImmutableArray<Outputs.GetNetworkIpamConfigsResult> ipamConfigs,
            string? name,
            ImmutableDictionary<string, object> options,
            string scope)
        {
            Driver = driver;
            Id = id;
            Internal = @internal;
            IpamConfigs = ipamConfigs;
            Name = name;
            Options = options;
            Scope = scope;
        }
    }

    namespace Inputs
    {

    public sealed class GetNetworkIpamConfigsArgs : Pulumi.InvokeArgs
    {
        [Input("auxAddress")]
        private Dictionary<string, object>? _auxAddress;
        public Dictionary<string, object> AuxAddress
        {
            get => _auxAddress ?? (_auxAddress = new Dictionary<string, object>());
            set => _auxAddress = value;
        }

        [Input("gateway")]
        public string? Gateway { get; set; }

        [Input("ipRange")]
        public string? IpRange { get; set; }

        [Input("subnet")]
        public string? Subnet { get; set; }

        public GetNetworkIpamConfigsArgs()
        {
        }
    }
    }

    namespace Outputs
    {

    [OutputType]
    public sealed class GetNetworkIpamConfigsResult
    {
        public readonly ImmutableDictionary<string, object>? AuxAddress;
        public readonly string? Gateway;
        public readonly string? IpRange;
        public readonly string? Subnet;

        [OutputConstructor]
        private GetNetworkIpamConfigsResult(
            ImmutableDictionary<string, object>? auxAddress,
            string? gateway,
            string? ipRange,
            string? subnet)
        {
            AuxAddress = auxAddress;
            Gateway = gateway;
            IpRange = ipRange;
            Subnet = subnet;
        }
    }
    }
}
