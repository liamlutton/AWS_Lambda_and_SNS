# Creating the Lambda
<p>
We will go back to <a href="http://aws.amazon.com">aws.amazon.com</a>
</p>

<p>
Once you've signed in, click on "Services" at the top of the screen. Search for "Lambda." It should be the choice with the description, "Run Code without Thinking about Servers."
<br>Please click that option.
</p>

<p>
Before creating a new lambda function, be sure to switch your region to "N. Virginia," which is a region that supports Lambda. In order to do this, look at the top right of your screen next to "Support." To the left of Support is the name of the AWS region where we are hosting our code...it should say, "N. Virginia," as this is the region that supports Lambda. If it is a different region, simply click the region name and select "N. Virginia."
</p>

### The Lambda management console

<p>
Welcome! You are now in the Lambda management console. This is where all of your Lambda functions will be located.
</p>

<ol>
<li>Please select, "Create a new function." </li>
<li>Select "Blueprints" from the top columns</li>
<li>Scroll down if needed and click on the "alexa-skill-kit-sdk-factskill" blueprint. This will provide fantastic boilerplate code
for us to build off of.</li>
<li>I like to name my functions as [SkillName] + "Intent," as this helps me keep track of the relationships between my Lambdas and my skills. If you have a better idea in mind, you can name your Lambdas however you wish!</li>
<li>If this is your first Lambda, select "Create a custom role" in the Role menu. In the screen that opens up, simply click Allow. You just allowed the Lambda service the permissions it needs to run your code, to summarize the IAM significance.</li>
<li>Now, we will select the role we just created in the Existing Role section, should that not have already been selected.</li>
<li>Scroll down and give the Create Function button a nice click!</li>
<li>Congratulations! You just made a Lambda function! Yayyyyy</li>
</ol>

### Connect the Alexa trigger
<p>
To activate the Lambda function via Alexa, we have to connect the Alexa Skills Kit trigger. 
</p>
<p>From the Add Triggers column on the lefthand side, look for "Alexa Skills Kit." If you can't find the "Alexa Skills Kit" button,
 you should make sure you're in the correct region (N. Virginia). If you're not, you'll have to restart from the first step of creating the Lambda :( 
 After changing to the correct region, you should be able to see Alexa Skills Kit in the triggers section now.

After clicking "Alexa Skills Kit," you'll have to enter the key to your skill that you are creating at the field that appears under "Configure Triggers" section. The skill key can be found on the Alexa Development Console webpage by clicking "View Skill ID" on the disambiguation page listing all your skills.
Copy and paste the skill key into the Skill ID field in the Configure Triggers section and click "Add."
Finally, click "Save" at the top-right of the screen (should be a familiar step by now :)).
</p>

<p>
  Nice work! You just made a Lambda function that can be triggered by any Alexa-enabled device.
</p>

### Connect the Lambda to the skill itself
<p>
In the top right corner of your Lambda is a value that reads as <b>ARN - arn:aws:lambda:us-east-1:XXXXXX...</b>
<br>Please copy this value from "arn:aws..." through the end after the name of the Lambda.
</p>

<p>
 Head back to the Alexa skill builder and go to this skill's interface. Select "Endpoint" in the left sidebar.
 <br>Select AWS Lambda ARN and paste the value you just copied into "Default Region."
 </p>
 
<p>
We just connected this skill's voice interface (frontend) to the logic processing code (backend) with the ARN value. The reason this feature exists is to permit developers to create their own endpoints to process the Alexa requests in a manner desirable to them. 
</p>

### <a href="https://github.com/liamlutton/AWS_Lambda_and_SNS/blob/master/page3.md">Let's connect this Lambda to AWS SNS</a>

