import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [],
    providers: [],
    exports: [],
})
export class Feature3Module {
    constructor(){
        console.log('Feature3 Module Loaded');
    }
}