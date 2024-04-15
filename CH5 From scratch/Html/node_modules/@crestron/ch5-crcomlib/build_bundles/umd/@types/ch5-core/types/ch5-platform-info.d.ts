export interface ICh5PlatformInfo {
    capabilities: ICh5PlatformInfoCapabilities;
    version: string;
    name: string;
}
export interface ICh5PlatformInfoCapabilities {
    supportsTouchActivity: boolean;
    supportCredentialIntercept: ICh5PlatformInfoSupportCredentialIntercept;
}
export interface ICh5PlatformInfoSupportCredentialIntercept {
    http: string;
    https: string;
}
