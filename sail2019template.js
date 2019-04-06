/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';
const Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================
const APP_ID = undefined;

const SKILL_NAME = 'SpaceFacts'; // TODO Replace with name of your skill (i.e. ShareLove)

const GET_MESSAGE_PREFIX = "ShareLove: ";
const HELP_MESSAGE = 'You can say tell me a space fact, or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';

//=========================================================================================================================================
//TODO: Replace this data with your own.
//=========================================================================================================================================
const data = [
    "You are a champion.",
    "You are awesome.",
    "You inspire many.",
    "You are a meaningful and special individual.",
    "Don't forget to smile, you are beautiful!",
    "You did a good job today.",
    "You are a role model and a great friend.",
    "I am glad I know you."
];

//=========================================================================================================================================
//Editing anything below this line might break your skill.
//=========================================================================================================================================

const handlers = {
    'LaunchRequest': function () {
        this.emit('HelloWorldIntent'); // TODO Replace HelloWorldIntent with your intent name (i.e. ShareLoveIntent)
    },
    'HelloWorldIntent': function () { // TODO Replace HelloWorldIntent with your intent name (i.e. ShareLoveIntent)
        const messageArr = data;
        const messageIndex = Math.floor(Math.random() * messageArr.length);
        const randMessage = messageArr[messageIndex];
        const speechOutput = GET_MESSAGE_PREFIX + randMessage;
        
        // Bonus: try to use this to send messages to different people
        let recipient = this.event.request.intent.slots.ContactName.value; // TODO Replace ContactName with your slot name (i.e. ContactName)
        
        var phoneNumber = "+16507965247";
        
        let params = { PhoneNumber: phoneNumber, Message: speechOutput };

        this.response.speak("Your message has been sent!");
        
        // Calls function to deliver text message to the recipient
        deliverMessage(params, myResult=>{
        });
        this.emit(':responseReady');
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
};

exports.handler = function (event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

function deliverMessage(params, callback) {
    // Initializing AWS and SNS to fulfill our task
    let AWS = require('aws-sdk');
    let AWSregion = 'us-east-1';
    AWS.config.update({region: AWSregion});

    let SNS = new AWS.SNS();

    // Send the message!
    // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SNS.html#publish
    SNS.publish(params, function(err, data){
        console.log('sending message to ' + params.PhoneNumber.toString());

        if (err) {
            console.log(err, err.stack);
        }

        callback('Success!');
    });
}
