/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * GoogleAuthError is thrown when there is authentication issue with the request
 */
declare class GoogleAuthError extends Error {
    readonly stackTrace: any;
    constructor(message: string, stackTrace?: any);
}
/**
 * ClientError is thrown when http 4XX status is received.
 * For details please refer to https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses
 */
declare class ClientError extends Error {
    readonly stackTrace: any;
    constructor(message: string, stackTrace?: any);
}
/**
 * GoogleGenerativeAIError is thrown when http response is not ok and status code is not 4XX
 * For details please refer to https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
 */
declare class GoogleGenerativeAIError extends Error {
    readonly stackTrace: any;
    constructor(message: string, stackTrace?: any);
}
export { ClientError, GoogleAuthError, GoogleGenerativeAIError };
