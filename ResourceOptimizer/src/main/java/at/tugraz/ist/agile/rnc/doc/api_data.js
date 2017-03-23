define({ "api": [
  {
    "type": "get",
    "url": "/recommenderdockerservice/getAppRecommendation",
    "title": "GetAppRecommendation",
    "name": "GetAppRecommendation",
    "version": "1.0.0",
    "group": "1_Recommender",
    "description": "<p>Returns Recommended Apps.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "ListOfApps",
            "description": "<p>List of Recommended Apps with their title,href,stars,downloads</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://192.168.1.246:8090/recommenderdockerservice/getAppRecommendation/"
      }
    ],
    "filename": "./RnCAPI.java",
    "groupTitle": "1_Recommender"
  },
  {
    "type": "get",
    "url": "/recommenderdockerservice/getCloudRecommendation",
    "title": "GetCloudRecommendation",
    "name": "GetCloudRecommendation",
    "version": "1.0.0",
    "group": "1_Recommender",
    "description": "<p>Returns Recommended Cloud Servers.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "RecommendedClouds",
            "description": "<p>List of Recommended Clouds with their title,link,accesstype,locations,middlewares,frameworks,runtimes,services,pricing.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://192.168.1.246:8090/recommenderdockerservice/getCloudRecommendation/"
      }
    ],
    "filename": "./RnCAPI.java",
    "groupTitle": "1_Recommender"
  },
  {
    "type": "get",
    "url": "/recommenderdockerservice/getWorkflowRecommendation",
    "title": "GetWorkflowRecommendation",
    "name": "GetWorkflowRecommendation",
    "version": "1.0.0",
    "group": "1_Recommender",
    "description": "<p>Returns Recommended Workflows.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "ListOfWFs",
            "description": "<p>List of Recommended Workflows with their type,datatag,dataowner,href.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://192.168.1.246:8090/recommenderdockerservice/getWorkflowRecommendation/"
      }
    ],
    "filename": "./RnCAPI.java",
    "groupTitle": "1_Recommender"
  },
  {
    "type": "get",
    "url": "/recommenderdockerservice/updateGatewayProfile",
    "title": "UpdateGatewayProfile",
    "name": "UpdateGatewayProfile",
    "version": "1.0.0",
    "group": "1_Recommender",
    "description": "<p>Takes the current the gateway profile.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "success",
            "description": "<p>is 0, error is -1</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://192.168.1.246:8090/recommenderdockerservice/updateGatewayProfile/"
      }
    ],
    "filename": "./RnCAPI.java",
    "groupTitle": "1_Recommender"
  },
  {
    "type": "get",
    "url": "/recommenderdockerservice/updateRepositories",
    "title": "UpdateRepositories",
    "name": "UpdateRepositories",
    "version": "1.0.0",
    "group": "1_Recommender",
    "description": "<p>Updates the local repositories by getting new items from Amazon, Docker.hub and Node.Red websites.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "success",
            "description": "<p>is 0, error is -1</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://192.168.1.246:8090/recommenderdockerservice/updateRepositories/"
      }
    ],
    "filename": "./RnCAPI.java",
    "groupTitle": "1_Recommender"
  },
  {
    "type": "get",
    "url": "/recommenderdockerservice/getDeviceRecommendation",
    "title": "getDeviceRecommendation",
    "name": "getDeviceRecommendation",
    "version": "1.0.0",
    "group": "1_Recommender",
    "description": "<p>Returns Recommended Devices.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "RecommendedDevices",
            "description": "<p>List of Recommended Devices with their title and link.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://192.168.1.246:8090/recommenderdockerservice/getDeviceRecommendation/"
      }
    ],
    "filename": "./RnCAPI.java",
    "groupTitle": "1_Recommender"
  },
  {
    "type": "get",
    "url": "/recommenderdockerservice/getResourceOptimization",
    "title": "GetResourceOptimization",
    "name": "GetResourceOptimization",
    "version": "1.0.0",
    "group": "2_Configurator",
    "description": "<p>Returns Resource Optimized Configuration.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "installedApps",
            "description": "<p>Optimized Configuration of installed Apps.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "pluggedDevs",
            "description": "<p>plugged devices on the gateway.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "installedWFs",
            "description": "<p>installed nodes on the gateway.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "location",
            "description": "<p>location of the gateway as &quot;EU&quot;, &quot;NA&quot;, &quot;SA&quot;, &quot;AS&quot;, &quot;OC&quot;</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "pricingPreferences",
            "description": "<p>pricing preferences of the user as &quot;metered&quot;, &quot;fixed&quot;, &quot;free&quot;</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://192.168.1.246:8090/recommenderdockerservice/getResourceOptimization/"
      }
    ],
    "filename": "./RnCAPI.java",
    "groupTitle": "2_Configurator"
  },
  {
    "type": "put",
    "url": "/recommenderdockerservice/getDeviceRecommendation",
    "title": "SetServiceConfiguration",
    "name": "SetServiceConfiguration",
    "version": "1.0.0",
    "group": "3_Settings",
    "description": "<p>Updates the settings of the service.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "StaticServiceConfiguration",
            "description": "<p>Settings of the service.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "optional": false,
            "field": "settings",
            "description": "<p>are updated successfully.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://192.168.1.246:8090/recommenderdockerservice/setServiceConfiguration/"
      }
    ],
    "filename": "./RnCAPI.java",
    "groupTitle": "3_Settings"
  },
  {
    "type": "get",
    "url": "/recommenderdockerservice/getServiceConfiguration",
    "title": "getServiceConfiguration",
    "name": "getServiceConfiguration",
    "version": "1.0.0",
    "group": "3_Settings",
    "description": "<p>Returns the settings of the service.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "StaticServiceConfiguration",
            "description": "<p>Current settings of the service.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://192.168.1.246:8090/recommenderdockerservice/getServiceConfiguration/"
      }
    ],
    "filename": "./RnCAPI.java",
    "groupTitle": "3_Settings"
  },
  {
    "type": "get",
    "url": "/recommenderdockerservice/getServiceConfiguration",
    "title": "getGatewayProfileForConfigurator",
    "name": "getGatewayProfileForConfigurator",
    "version": "1.0.0",
    "group": "4_For_Testing_Purposes",
    "description": "<p>Returns the gateway profile used by Configurator.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "GatewayProfile",
            "description": "<p>Current profile of the gateway.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://192.168.1.246:8090/recommenderdockerservice/getGatewayProfileForConfigurator/"
      }
    ],
    "filename": "./RnCAPI.java",
    "groupTitle": "4_For_Testing_Purposes"
  },
  {
    "type": "get",
    "url": "/recommenderdockerservice/getServiceConfiguration",
    "title": "getGatewayProfileForRecommender",
    "name": "getGatewayProfileForRecommender",
    "version": "1.0.0",
    "group": "4_For_Testing_Purposes",
    "description": "<p>Returns the gateway profile used by Recommender.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "GatewayProfile",
            "description": "<p>Current profile of the gateway.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://192.168.1.246:8090/recommenderdockerservice/getGatewayProfileForRecommender/"
      }
    ],
    "filename": "./RnCAPI.java",
    "groupTitle": "4_For_Testing_Purposes"
  },
  {
    "type": "put",
    "url": "/recommenderdockerservice/getServiceConfiguration",
    "title": "setGatewayProfileForConfigurator",
    "name": "setGatewayProfileForConfigurator",
    "version": "1.0.0",
    "group": "4_For_Testing_Purposes",
    "description": "<p>Sets the gateway profile used by Configurator.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "GatewayProfile",
            "description": "<p>Profile of the gateway.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"id\": 4711\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://192.168.1.246:8090/recommenderdockerservice/setGatewayProfileForConfigurator/"
      }
    ],
    "filename": "./RnCAPI.java",
    "groupTitle": "4_For_Testing_Purposes"
  },
  {
    "type": "put",
    "url": "/recommenderdockerservice/getServiceConfiguration",
    "title": "setGatewayProfileForRecommender",
    "name": "setGatewayProfileForRecommender",
    "version": "1.0.0",
    "group": "4_For_Testing_Purposes",
    "description": "<p>Sets the gateway profile used by Recommender.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "GatewayProfile",
            "description": "<p>Profile of the gateway.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://192.168.1.246:8090/recommenderdockerservice/setGatewayProfileForRecommender/"
      }
    ],
    "filename": "./RnCAPI.java",
    "groupTitle": "4_For_Testing_Purposes"
  },
  {
    "description": "<p>AGILE Recommender and Configurator Docker Service</p>",
    "version": "1.0.0",
    "type": "",
    "url": "",
    "filename": "./RnCAPI.java",
    "group": "C__Users_spolater_Desktop_AGILE_AGILE_GITHUB_Configurator_Configurator_ResourceOptimizer_src_main_java_at_tugraz_ist_agile_rnc_RnCAPI_java",
    "groupTitle": "C__Users_spolater_Desktop_AGILE_AGILE_GITHUB_Configurator_Configurator_ResourceOptimizer_src_main_java_at_tugraz_ist_agile_rnc_RnCAPI_java",
    "name": ""
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "C__Users_spolater_Desktop_AGILE_AGILE_GITHUB_Configurator_Configurator_ResourceOptimizer_src_main_java_at_tugraz_ist_agile_rnc_doc_main_js",
    "groupTitle": "C__Users_spolater_Desktop_AGILE_AGILE_GITHUB_Configurator_Configurator_ResourceOptimizer_src_main_java_at_tugraz_ist_agile_rnc_doc_main_js",
    "name": ""
  }
] });
