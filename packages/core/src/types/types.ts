export interface AmplifyConfig {
	Analytics?: object;
	Auth?: object;
	API?: object;
	Storage?: object;
	Cache?: object;
	ssr?: boolean;
}

export interface ICredentials {
	accessKeyId: string;
	sessionToken: string;
	secretAccessKey: string;
	identityId: string;
	authenticated: boolean;
	// Long term creds do not provide an expiration date
	expiration?: Date;
}

/**
 * @private
 * Internal use of Amplify only
 */

export type DelayFunction = (
	attempt: number,
	args?: any[],
	error?: Error
) => number | false;
