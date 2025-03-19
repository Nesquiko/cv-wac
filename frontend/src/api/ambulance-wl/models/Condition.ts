/* tslint:disable */
/* eslint-disable */
/**
 * Waiting List Api
 * Ambulance Waiting List management for Web-In-Cloud system
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: your_email@stuba.sk
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Describes disease, symptoms, or other reasons of patient   visit
 * @export
 * @interface Condition
 */
export interface Condition {
    /**
     * 
     * @type {string}
     * @memberof Condition
     */
    value: string;
    /**
     * 
     * @type {string}
     * @memberof Condition
     */
    code?: string;
    /**
     * Link to encyclopedical explanation of the patient's condition
     * @type {string}
     * @memberof Condition
     */
    reference?: string;
    /**
     * 
     * @type {number}
     * @memberof Condition
     */
    typicalDurationMinutes?: number;
}

/**
 * Check if a given object implements the Condition interface.
 */
export function instanceOfCondition(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "value" in value;

    return isInstance;
}

export function ConditionFromJSON(json: any): Condition {
    return ConditionFromJSONTyped(json, false);
}

export function ConditionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Condition {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'value': json['value'],
        'code': !exists(json, 'code') ? undefined : json['code'],
        'reference': !exists(json, 'reference') ? undefined : json['reference'],
        'typicalDurationMinutes': !exists(json, 'typicalDurationMinutes') ? undefined : json['typicalDurationMinutes'],
    };
}

export function ConditionToJSON(value?: Condition | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'value': value.value,
        'code': value.code,
        'reference': value.reference,
        'typicalDurationMinutes': value.typicalDurationMinutes,
    };
}

