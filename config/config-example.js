/* eslint linebreak-style: ["error", "windows"] */

exports.Conn = {
  // Login Data... TYPE THIS AT YOUR OWN RISK!
  loginData: {
    username: '', // your Risco Panel username
    password: '', // your Risco Panel password
    code: '', // your Risco Panel code
    SelectedSiteId: '', // SiteId Code - get it from installer or read README
  },
  RISCOHOST: 'https://www.riscocloud.com/',
  ENDPOINT: 'ELAS/WebUI/',
  ResURLs: {
    LOGIN: '',
    SITELOGIN: 'SiteLogin',
    GETCAMS: 'Cameras/Get',
    GETDECTS: 'Detectors/Get',
    GETEH: 'EventHistory/Get',
    GETOV: 'Overview/Get',
    GETCPSTATE: 'Security/GetCPState',
    SETARMDISARM: 'Security/ArmDisarm',
    SETDETBYPASS: 'Detectors/SetBypass',
    ISUSERCODEEXPIRED: 'SystemSettings/IsUserCodeExpired',
  },
  ResCODES: {
    RESP200: 200,
    RESP302: 302,
  },
  postRequestOptions: {
    referer: 'MainPage/MainPage',
  },
  POLLINGINTERVAL: 10000,
  CYCLEBEFOREUSERALIVE: 30,
  USERISALIVE: '?userIsAlive=true',
};

exports.States = {
  armStatus: {
    ARMED: 'armed',
    PARTARMED: 'partarmed',
    DISARMED: 'disarmed',
    ONALARM: 'onalarm',
  },
  armCommands: {
    ARM: 'armed',
    DISARM: 'disarmed',
    PARTARM: 'partially',
  },
};

exports.Mqtt = {
  url: {
    MQTT_SERVER: '127.0.0.1', // your Mqtt Server address
    MQTT_PORT: 1883, // Mqtt default port
  },
  options: {
    username: '', // Mqtt Server username (if required)
    password: '', // Mqtt Server password (if required)
  },
  msgOptions: {
    clientId: 'mqttjs_Risco',
    retain: true,
  },
  channels: {
    MAINCHAN: 'riscopanel', // Main Topic
    ARMSTATUS: 'armstatus', // Arm status subtopic
    DETECTORS: 'dects', // Detectors subtopic
    EVENTHISTORY: 'eventhistory', // Event History subtopic
    ISONALARM: 'isonalarm', // Topic for receiving ongoing alarm
    DOMOTICZCHAN: 'domoticz/in', // Domoticz only supports a single topic in flat mode
  },
  transforms: {
    // transforms states strings...to use for example in Home Assistant to reflect H.A.'s  alarm control panel states
    states: {
      disarmed: '0', // disarmed. Domoticz: '0' (but it defaults to this value for other values)
      partarmed: '10', // If you use Home Assistant you must set to 'armed_home'. Domoticz: '10'
      armed: '20', // If you use  Home Assistant you must set to 'armed_away'. Domoticz: '20'
      onalarm: 'onalarm', // If you use  Home Assistant you must set to 'triggered'
    },
    // dummy devices in Domoticz
    devices: {
      /*
      Armed state
      Create a custom switch of type Selector, with levels (0 disarmed, 10, partarmed, 20 armed) 
      The value here is the device ID
      */
      ARMED: 1406,
      /*
      On Alarm
      Create a custom switch of type on/off
      The value here is the device ID
      */
      ONALARM: 1407,
    },
  },
};
