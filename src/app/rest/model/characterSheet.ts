/**
 * Simple character agent API
 * This is a simple API
 *
 * OpenAPI spec version: 1.0.0
 * Contact: jedrzejniemiera@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Abilities } from './abilities';
import { Proficiencies } from './proficiencies';

export interface CharacterSheet { 
    id: string;
    name?: string;
    hitpoints?: number;
    race?: string;
    _class?: string;
    level?: number;
    abilities?: Abilities;
    proficiencies?: Proficiencies;
}