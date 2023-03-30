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

export interface Proficiencies { 
    strengthSave?: boolean;
    athletics?: number;

    dexteritySave?: boolean;
    acrobatics?: number;
    sleightOfHand?: number;
    stealth?: number;

    constitutionSave?: boolean;

    intelligenceSave?: boolean;
    arcana?: number;
    history?: number;
    investigation?: number;
    nature?: number;
    religion?: number;

    wisdomSave?: boolean;
    animalHandling?: number;
    insight?: number;
    medicine?: number;
    perception?: number;
    survival?: number;
    
    charismaSave?: boolean;
    deception?: number;
    intimidation?: number;
    performance?: number;
    persuasion?: number;
}