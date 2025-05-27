import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export class CdkLambdaStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const lambdaFunction = new lambda.Function(this, 'MyLambdaFunction', {
      runtime: lambda.Runtime.NODEJS_20_X, // Updated to supported runtime
      handler: 'handler.handler', // The file is "handler.ts" and the function is "handler"
      code: lambda.Code.fromAsset('src/lambda'), // Path to the Lambda function code
    });
  }
}