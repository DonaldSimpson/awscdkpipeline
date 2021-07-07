"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LambdaStack = void 0;
const codedeploy = require("@aws-cdk/aws-codedeploy");
const lambda = require("@aws-cdk/aws-lambda");
const core_1 = require("@aws-cdk/core");
class LambdaStack extends core_1.Stack {
    constructor(app, id, props) {
        super(app, id, props);
        this.lambdaCode = lambda.Code.fromCfnParameters();
        const func = new lambda.Function(this, 'Lambda', {
            code: this.lambdaCode,
            handler: 'index.main',
            runtime: lambda.Runtime.NODEJS_10_X,
            description: `Function generated on: ${new Date().toISOString()}`,
        });
        const alias = new lambda.Alias(this, 'LambdaAlias', {
            aliasName: 'Prod',
            version: func.currentVersion,
        });
        new codedeploy.LambdaDeploymentGroup(this, 'DeploymentGroup', {
            alias,
            deploymentConfig: codedeploy.LambdaDeploymentConfig.LINEAR_10PERCENT_EVERY_1MINUTE,
        });
    }
}
exports.LambdaStack = LambdaStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFtYmRhLXN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGFtYmRhLXN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNEQUFzRDtBQUN0RCw4Q0FBOEM7QUFDOUMsd0NBQXVEO0FBRXZELE1BQWEsV0FBWSxTQUFRLFlBQUs7SUFHcEMsWUFBWSxHQUFRLEVBQUUsRUFBVSxFQUFFLEtBQWtCO1FBQ2xELEtBQUssQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXRCLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBRWxELE1BQU0sSUFBSSxHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFO1lBQy9DLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVTtZQUNyQixPQUFPLEVBQUUsWUFBWTtZQUNyQixPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXO1lBQ25DLFdBQVcsRUFBRSwwQkFBMEIsSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsRUFBRTtTQUNsRSxDQUFDLENBQUM7UUFFSCxNQUFNLEtBQUssR0FBRyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRTtZQUNsRCxTQUFTLEVBQUUsTUFBTTtZQUNqQixPQUFPLEVBQUUsSUFBSSxDQUFDLGNBQWM7U0FDN0IsQ0FBQyxDQUFDO1FBRUgsSUFBSSxVQUFVLENBQUMscUJBQXFCLENBQUMsSUFBSSxFQUFFLGlCQUFpQixFQUFFO1lBQzVELEtBQUs7WUFDTCxnQkFBZ0IsRUFBRSxVQUFVLENBQUMsc0JBQXNCLENBQUMsOEJBQThCO1NBQ25GLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRjtBQXpCRCxrQ0F5QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjb2RlZGVwbG95IGZyb20gJ0Bhd3MtY2RrL2F3cy1jb2RlZGVwbG95JztcbmltcG9ydCAqIGFzIGxhbWJkYSBmcm9tICdAYXdzLWNkay9hd3MtbGFtYmRhJztcbmltcG9ydCB7IEFwcCwgU3RhY2ssIFN0YWNrUHJvcHMgfSBmcm9tICdAYXdzLWNkay9jb3JlJztcbiAgICAgIFxuZXhwb3J0IGNsYXNzIExhbWJkYVN0YWNrIGV4dGVuZHMgU3RhY2sge1xuICBwdWJsaWMgcmVhZG9ubHkgbGFtYmRhQ29kZTogbGFtYmRhLkNmblBhcmFtZXRlcnNDb2RlO1xuICAgICAgXG4gIGNvbnN0cnVjdG9yKGFwcDogQXBwLCBpZDogc3RyaW5nLCBwcm9wcz86IFN0YWNrUHJvcHMpIHtcbiAgICBzdXBlcihhcHAsIGlkLCBwcm9wcyk7XG4gICAgICBcbiAgICB0aGlzLmxhbWJkYUNvZGUgPSBsYW1iZGEuQ29kZS5mcm9tQ2ZuUGFyYW1ldGVycygpO1xuICAgICAgXG4gICAgY29uc3QgZnVuYyA9IG5ldyBsYW1iZGEuRnVuY3Rpb24odGhpcywgJ0xhbWJkYScsIHtcbiAgICAgIGNvZGU6IHRoaXMubGFtYmRhQ29kZSxcbiAgICAgIGhhbmRsZXI6ICdpbmRleC5tYWluJyxcbiAgICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18xMF9YLFxuICAgICAgZGVzY3JpcHRpb246IGBGdW5jdGlvbiBnZW5lcmF0ZWQgb246ICR7bmV3IERhdGUoKS50b0lTT1N0cmluZygpfWAsXG4gICAgfSk7XG4gICAgICBcbiAgICBjb25zdCBhbGlhcyA9IG5ldyBsYW1iZGEuQWxpYXModGhpcywgJ0xhbWJkYUFsaWFzJywge1xuICAgICAgYWxpYXNOYW1lOiAnUHJvZCcsXG4gICAgICB2ZXJzaW9uOiBmdW5jLmN1cnJlbnRWZXJzaW9uLFxuICAgIH0pO1xuICAgICAgXG4gICAgbmV3IGNvZGVkZXBsb3kuTGFtYmRhRGVwbG95bWVudEdyb3VwKHRoaXMsICdEZXBsb3ltZW50R3JvdXAnLCB7XG4gICAgICBhbGlhcyxcbiAgICAgIGRlcGxveW1lbnRDb25maWc6IGNvZGVkZXBsb3kuTGFtYmRhRGVwbG95bWVudENvbmZpZy5MSU5FQVJfMTBQRVJDRU5UX0VWRVJZXzFNSU5VVEUsXG4gICAgfSk7XG4gIH1cbn0iXX0=