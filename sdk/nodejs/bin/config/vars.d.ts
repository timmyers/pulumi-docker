/**
 * PEM-encoded content of Docker host CA certificate
 */
export declare let caMaterial: string | undefined;
/**
 * PEM-encoded content of Docker client certificate
 */
export declare let certMaterial: string | undefined;
/**
 * Path to directory with Docker TLS config
 */
export declare let certPath: string | undefined;
/**
 * The Docker daemon address
 */
export declare let host: string;
/**
 * PEM-encoded content of Docker client private key
 */
export declare let keyMaterial: string | undefined;
export declare let registryAuth: {
    address: string;
    configFile?: string;
    password?: string;
    username?: string;
}[] | undefined;
