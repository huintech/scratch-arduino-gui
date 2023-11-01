import React from 'react';
import {FormattedMessage} from 'react-intl';
import defaultsDeep from 'lodash.defaultsdeep';
import log from '../../log';

import arduinoBaseToolBox from './baseToolbox/arduino';

import unselectDeviceIconURL from './unselectDevice/unselectDevice.png';

// add coconut
import coconutIconURL from './coconut/coconut.png';
import coconutConnectionIconURL from './coconut/coconut-illustration.svg';
import coconutConnectionSmallIconURL from './coconut/coconut-small.svg';

import ottoRobotBasicIconURL from './ottoRobotBasic/ottorobotbasic.png';
import ottoRobotBasicConnectionIconURL from './ottoRobotBasic/ottorobotbasic-illustration.svg';
import ottoRobotBasicConnectionSmallIconURL from './ottoRobotBasic/ottorobotbasic-small.svg';

import arduinoUnoIconURL from './arduinoUno/arduinoUno.png';
import arduinoUnoConnectionIconURL from './arduinoUno/arduinoUno-illustration.svg';
import arduinoUnoConnectionSmallIconURL from './arduinoUno/arduinoUno-small.svg';

import arduinoNanoIconURL from './arduinoNano/arduinoNano.png';
import arduinoNanoConnectionIconURL from './arduinoNano/arduinoNano-illustration.svg';
import arduinoNanoConnectionSmallIconURL from './arduinoNano/arduinoNano-small.svg';

import esp32IconURL from './esp32/esp32.png';
import esp32ConnectionIconURL from './esp32/esp32-illustration.svg';
import esp32ConnectionSmallIconURL from './esp32/esp32-small.svg';

import esp8266IconURL from './esp8266/esp8266.png';
import esp8266ConnectionIconURL from './esp8266/esp8266-illustration.svg';
import esp8266ConnectionSmallIconURL from './esp8266/esp8266-small.svg';

import FastLEDIconURL from './FastLED/FastLED.png';
import FastLEDConnectionIconURL from './FastLED/FastLED-illustration.svg';
import FastLEDConnectionSmallIconURL from './FastLED/FastLED-small.svg';

const deviceData = [
    /**
     * Unselect the deivce back to pure scratch mode
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
        name: 'Coconut-s (Stepper motor)',
        deviceId: 'coconut',
        manufactor: 'coco-nut.kr',
        leanMore: 'http://coco-nut.kr',
        type: 'arduino',
        iconURL: coconutIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Coconut-s, get started with robot project."
                description="Description for the Coconut-s"
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
                description="Message to help people connect to their arduino."
                id="gui.device.arduino.connectingMessage"
            />
        ),
        baseToolBoxXml: arduinoBaseToolBox,
        programMode: ['realtime', 'upload'],
        programLanguage: ['block', 'c', 'cpp'],
        tags: ['robot'],
        helpLink: 'https://store.arduino.cc/usa/arduino-uno-rev3'
    },
    {
        name: 'Otto Robot - Basic',
        deviceId: 'ottoBasic',
        manufactor: 'arduino.cc',
        leanMore: 'https://store.arduino.cc/usa/arduino-uno-rev3',
        type: 'arduino',
        iconURL: ottoRobotBasicIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Otto Robot - Basic, get started with robot project."
                description="Description for the Otto Robot - Basic"
                id="gui.device.OttoRobotBasic.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: false,
        serialportRequired: true,
        defaultBaudRate: '9600',
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: ottoRobotBasicConnectionIconURL,
        connectionSmallIconURL: ottoRobotBasicConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their arduino."
                id="gui.device.arduino.connectingMessage"
            />
        ),
        baseToolBoxXml: arduinoBaseToolBox,
        programMode: ['realtime', 'upload'],
        programLanguage: ['block', 'c', 'cpp'],
        tags: ['robot'],
        helpLink: 'http://coco-nut.kr'
    },
    {
        name: 'LED',
        deviceId: 'FastLED',
        manufactor: 'arduino.cc',
        leanMore: 'https://store.arduino.cc/usa/arduino-nano',
        type: 'arduino',
        boardType: 'Nano',
        iconURL: FastLEDIconURL,
        description: (
            <FormattedMessage
                defaultMessage="The LED Kit, build your LED projects."
                description="Description for the LED device"
                id="gui.device.FastLED.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: false,
        serialportRequired: true,
        defaultBaudRate: '9600',
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: FastLEDConnectionIconURL,
        connectionSmallIconURL: FastLEDConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their arduino."
                id="gui.device.arduino.connectingMessage"
            />
        ),
        baseToolBoxXml: arduinoBaseToolBox,
        programMode: ['realtime', 'upload'],
        programLanguage: ['block', 'c', 'cpp'],
        tags: ['kit'],
        helpLink: 'https://store.arduino.cc/usa/arduino-nano'
    },
    {
        name: 'Arduino Uno',
        deviceId: 'arduinoUno',
        manufactor: 'arduino.cc',
        leanMore: 'https://store.arduino.cc/usa/arduino-uno-rev3',
        type: 'arduino',
        iconURL: arduinoUnoIconURL,
        description: (
            <FormattedMessage
                defaultMessage="A great board to get started with electronics and coding."
                description="Description for the Arduino Uno device"
                id="gui.device.arduinoUno.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: false,
        serialportRequired: true,
        defaultBaudRate: '9600',
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: arduinoUnoConnectionIconURL,
        connectionSmallIconURL: arduinoUnoConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their arduino."
                id="gui.device.arduino.connectingMessage"
            />
        ),
        baseToolBoxXml: arduinoBaseToolBox,
        programMode: ['realtime', 'upload'],
        programLanguage: ['block', 'c', 'cpp'],
        tags: ['arduino'],
        helpLink: 'https://store.arduino.cc/usa/arduino-uno-rev3'
    },
    {
        name: 'Arduino Nano',
        deviceId: 'arduinoNano',
        manufactor: 'arduino.cc',
        leanMore: 'https://store.arduino.cc/usa/arduino-nano',
        type: 'arduino',
        boardType: 'Nano',
        iconURL: arduinoNanoIconURL,
        description: (
            <FormattedMessage
                defaultMessage="The Arduino Nano is a classic small board to build your projects with."
                description="Description for the Arduino Nano device"
                id="gui.device.arduinoNano.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: false,
        serialportRequired: true,
        defaultBaudRate: '9600',
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: arduinoNanoConnectionIconURL,
        connectionSmallIconURL: arduinoNanoConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their arduino."
                id="gui.device.arduino.connectingMessage"
            />
        ),
        baseToolBoxXml: arduinoBaseToolBox,
        programMode: ['realtime', 'upload'],
        programLanguage: ['block', 'c', 'cpp'],
        tags: ['arduino'],
        helpLink: 'https://store.arduino.cc/usa/arduino-nano'
    },
    {
        name: 'ESP32',
        deviceId: 'arduinoEsp32',
        manufactor: 'espressif',
        leanMore: 'https://www.espressif.com/',
        type: 'arduino',
        iconURL: esp32IconURL,
        description: (
            <FormattedMessage
                defaultMessage="Wi-Fi & Bluetooth control board with rich functions."
                description="Description for the esp32 device"
                id="gui.device.arduinoEsp32.description"
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
        connectionIconURL: esp32ConnectionIconURL,
        connectionSmallIconURL: esp32ConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their esp32."
                id="gui.device.arduinoEsp32.connectingMessage"
            />
        ),
        baseToolBoxXml: arduinoBaseToolBox,
        programMode: ['upload'],
        programLanguage: ['block', 'python'],
        tags: ['arduino'],
        helpLink: 'https://docs.espressif.com/projects/esp-idf/zh_CN/latest/esp32/hw-reference/esp32/get-started-devkitc.html'
    },
    {
        name: 'ESP8266',
        deviceId: 'arduinoEsp8266',
        manufactor: 'espressif',
        leanMore: 'https://www.espressif.com/',
        type: 'arduino',
        iconURL: esp8266IconURL,
        description: (
            <FormattedMessage
                defaultMessage="Low-cost Wi-Fi SOC control board."
                description="Description for the esp8266 device"
                id="gui.device.arduinoEsp8266.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: false,
        serialportRequired: true,
        defaultBaudRate: '76800',
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: esp8266ConnectionIconURL,
        connectionSmallIconURL: esp8266ConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their esp8266."
                id="gui.device.arduinoEsp8266.connectingMessage"
            />
        ),
        baseToolBoxXml: arduinoBaseToolBox,
        programMode: ['upload'],
        programLanguage: ['block', 'python'],
        tags: ['arduino'],
        helpLink: 'https://arduino-esp8266.readthedocs.io/en/3.0.0/index.html'
    }
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

    fullData.unshift(deviceData[0]); // add unselect deive in the head.

    return fullData;
};

export {
    deviceData as default,
    makeDeviceLibrary
};
