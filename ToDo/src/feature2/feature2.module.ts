import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [],
    providers: [],
    exports: [],
})
export class Feature2Module {
    constructor(){
        console.log('Feature2 Module Loaded');
    }
}
