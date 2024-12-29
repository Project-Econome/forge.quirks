import { ForgeExtension } from '@tryforge/forgescript';


export class ForgeQuirks extends ForgeExtension {
    name = 'forge.quirks';
    description = 'A collection of quirky, niche functions for those who need a little extra from forgescript.';
    version = '1.0.0';

    public init () {
        this.load(__dirname + '/functions');
    };
};