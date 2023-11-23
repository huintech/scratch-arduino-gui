import React from 'react';
import {FormattedMessage} from 'react-intl';
import defaultsDeep from 'lodash.defaultsdeep';
import log from '../../log';

import arduinoBaseToolBox from './baseToolbox/arduino';

import unselectDeviceIconURL from './unselectDevice/unselectDevice.png';

// add coconutS
import coconutIconURL from './coconutS/coconut.png';
import coconutConnectionIconURL from './coconutS/coconut-illustration.svg';
import coconutConnectionSmallIconURL from './coconutS/coconut-small.svg';

// import ottoRobotBasicIconURL from './ottoRobotBasic/ottorobotbasic.png';
// import ottoRobotBasicConnectionIconURL from './ottoRobotBasic/ottorobotbasic-illustration.svg';
// import ottoRobotBasicConnectionSmallIconURL from './ottoRobotBasic/ottorobotbasic-small.svg';
//
// import arduinoUnoIconURL from './arduinoUno/arduinoUno.png';
// import arduinoUnoConnectionIconURL from './arduinoUno/arduinoUno-illustration.svg';
// import arduinoUnoConnectionSmallIconURL from './arduinoUno/arduinoUno-small.svg';
//
// import FastLEDIconURL from './FastLED/FastLED.png';
// import FastLEDConnectionIconURL from './FastLED/FastLED-illustration.svg';
// import FastLEDConnectionSmallIconURL from './FastLED/FastLED-small.svg';

const deviceData = [
    /**
     * Unselect the device back to pure scratch mode
     */
    {
        name: (
            <FormattedMessage
                defaultMessage="Unselect deivce"
                description="Name for the unselect deivce"
                id="gui.device.unselectDevice.name"
            />
        ),
        deviceId: 'unselectDevice',
        iconURL: unselectDeviceIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Unselect the deivce, return to pure realtime programming mode."
                description="Description for the unselect deivce"
                id="gui.device.unselectDevice.description"
            />
        ),
        featured: true,
        hide: false,
        programMode: ['realtime'],
        programLanguage: ['block'],
        tags: ['realtime']
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Coconut-S"
                description="Name for Coconut-S deivce"
                id="gui.device.coconut.device.name"
            />
        ),
        deviceId: 'coconutS',
        manufactor: 'coco-nut.kr',
        leanMore: 'http://coco-nut.kr',
        type: 'arduino',
        iconURL: coconutIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Start a project with Coconut-S."
                description="Description for the Coconut-S"
                id="gui.device.coconut.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: false,
        serialportRequired: true,
        defaultBaudRate: '115200',
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: coconutConnectionIconURL,
        connectionSmallIconURL: coconutConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their Coconut-S."
                id="gui.device.coconut.connectingMessage"
            />
        ),
        baseToolBoxXml: arduinoBaseToolBox,
        // programMode: ['realtime', 'upload'],
        programMode: [],
        programLanguage: ['block'],
        tags: ['robot'],
        helpLink: 'http://coco-nut.kr'
    }
    // {
    //     name: 'Otto Robot - Basic',
    //     deviceId: 'ottoBasic',
    //     manufactor: 'arduino.cc',
    //     leanMore: 'https://store.arduino.cc/usa/arduino-uno-rev3',
    //     type: 'arduino',
    //     iconURL: ottoRobotBasicIconURL,
    //     description: (
    //         <FormattedMessage
    //             defaultMessage="Otto Robot - Basic, get started with robot project."
    //             description="Description for the Otto Robot - Basic"
    //             id="gui.device.OttoRobotBasic.description"
    //         />
    //     ),
    //     featured: true,
    //     disabled: false,
    //     bluetoothRequired: false,
    //     serialportRequired: true,
    //     defaultBaudRate: '9600',
    //     internetConnectionRequired: false,
    //     launchPeripheralConnectionFlow: true,
    //     useAutoScan: false,
    //     connectionIconURL: ottoRobotBasicConnectionIconURL,
    //     connectionSmallIconURL: ottoRobotBasicConnectionSmallIconURL,
    //     connectingMessage: (
    //         <FormattedMessage
    //             defaultMessage="Connecting"
    //             description="Message to help people connect to their arduino."
    //             id="gui.device.arduino.connectingMessage"
    //         />
    //     ),
    //     baseToolBoxXml: arduinoBaseToolBox,
    //     programMode: ['realtime', 'upload'],
    //     programLanguage: ['block', 'c', 'cpp'],
    //     tags: ['robot'],
    //     helpLink: 'http://coco-nut.kr'
    // },
    // {
    //     name: 'LED',
    //     deviceId: 'FastLED',
    //     manufactor: 'arduino.cc',
    //     leanMore: 'https://store.arduino.cc/usa/arduino-nano',
    //     type: 'arduino',
    //     boardType: 'Nano',
    //     iconURL: FastLEDIconURL,
    //     description: (
    //         <FormattedMessage
    //             defaultMessage="The LED Kit, build your LED projects."
    //             description="Description for the LED device"
    //             id="gui.device.FastLED.description"
    //         />
    //     ),
    //     featured: true,
    //     disabled: false,
    //     bluetoothRequired: false,
    //     serialportRequired: true,
    //     defaultBaudRate: '9600',
    //     internetConnectionRequired: false,
    //     launchPeripheralConnectionFlow: true,
    //     useAutoScan: false,
    //     connectionIconURL: FastLEDConnectionIconURL,
    //     connectionSmallIconURL: FastLEDConnectionSmallIconURL,
    //     connectingMessage: (
    //         <FormattedMessage
    //             defaultMessage="Connecting"
    //             description="Message to help people connect to their arduino."
    //             id="gui.device.arduino.connectingMessage"
    //         />
    //     ),
    //     baseToolBoxXml: arduinoBaseToolBox,
    //     programMode: ['realtime', 'upload'],
    //     programLanguage: ['block', 'c', 'cpp'],
    //     tags: ['kit'],
    //     helpLink: 'https://store.arduino.cc/usa/arduino-nano'
    // },
    // {
    //     name: 'Arduino Uno',
    //     deviceId: 'arduinoUno',
    //     manufactor: 'arduino.cc',
    //     leanMore: 'https://store.arduino.cc/usa/arduino-uno-rev3',
    //     type: 'arduino',
    //     iconURL: arduinoUnoIconURL,
    //     description: (
    //         <FormattedMessage
    //             defaultMessage="A great board to get started with electronics and coding."
    //             description="Description for the Arduino Uno device"
    //             id="gui.device.arduinoUno.description"
    //         />
    //     ),
    //     featured: true,
    //     disabled: false,
    //     bluetoothRequired: false,
    //     serialportRequired: true,
    //     defaultBaudRate: '9600',
    //     internetConnectionRequired: false,
    //     launchPeripheralConnectionFlow: true,
    //     useAutoScan: false,
    //     connectionIconURL: arduinoUnoConnectionIconURL,
    //     connectionSmallIconURL: arduinoUnoConnectionSmallIconURL,
    //     connectingMessage: (
    //         <FormattedMessage
    //             defaultMessage="Connecting"
    //             description="Message to help people connect to their arduino."
    //             id="gui.device.arduino.connectingMessage"
    //         />
    //     ),
    //     baseToolBoxXml: arduinoBaseToolBox,
    //     programMode: ['realtime', 'upload'],
    //     programLanguage: ['block', 'c', 'cpp'],
    //     tags: ['arduino'],
    //     helpLink: 'https://store.arduino.cc/usa/arduino-uno-rev3'
    // }
];

/**
 * To get real device id. eg: the third party id like ironKit_arduinoUno.
 * @param {string} deviceId - the id of the device.
 * @return {string} deviceId - the real device id.
 */
const analysisRealDeviceId = deviceId => {
    if (deviceId){
        // if the id contain '_' use the string afer the '_'.
        if (deviceId.indexOf('_') !== -1) {
            deviceId = deviceId.split('_')[1];
        }
    }
    return deviceId;
};

/**
 * Make device data from the input data. If it is a buid-in device, return the buid-in
 * data. If it is a third party device, find it's parent device, and overwrite its attributes
 * with the input data.
 * @param {string} data - the data of devices.
 * @return {string} fullData - processed data of devices.
 */
const makeDeviceLibrary = data => {
    const fullData = data
        .map(dev => {
        // Check if this is a build-in device.
            const matchedDevice = deviceData.find(item => dev.deviceId === item.deviceId);
            if (matchedDevice) {
                return matchedDevice;
            }

            // This is a third party device. Try to parse it's parent deivce.
            const realDeviceId = analysisRealDeviceId(dev.deviceId);
            if (realDeviceId) {
                const parentDevice = deviceData.find(item => realDeviceId === item.deviceId);
                if (parentDevice) {
                    return defaultsDeep({}, dev, {hide: false}, parentDevice);
                }
            }
            log.warn('Cannot find this device or it\'s parent device :', dev.deviceId);
            return null;
        })
        .filter(dev => dev); // filter null data.

    fullData.unshift(deviceData[0]); // add unselect device in the head.

    return fullData;
};

export {
    deviceData as default,
    makeDeviceLibrary
};
