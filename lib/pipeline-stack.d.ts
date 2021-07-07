import * as lambda from '@aws-cdk/aws-lambda';
import { App, Stack, StackProps } from '@aws-cdk/core';
export interface PipelineStackProps extends StackProps {
    readonly lambdaCode: lambda.CfnParametersCode;
    readonly repoName: string;
}
export declare class PipelineStack extends Stack {
    constructor(app: App, id: string, props: PipelineStackProps);
}
