/**
Licensed Materials - Property of Persistent © Copyright 2023 Persistent Systems.
Portions of this code are derived from IBM Corp © Copyright IBM Corp. 2006, 2016.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var Messages = {
	headerText: "Default header",
	actionsLabel: "Default action label",
	sampleText: "Default sample text",
	englishLanguage : "English",
	frenchLanguage : "French",
	russianLanguage : "Russian",
	hebrewLanguage : "Hebrew"
};

var wlInitOptions = {
    // Options to initialize with the WL.Client object.
    // For initialization options please refer to IBM MobileFirst Platform Foundation Knowledge Center.
};

// Global variable to store the current device language.
var lang;

// Called automatically after MFP framework initialization by WL.Client.init(wlInitOptions).
function wlCommonInit(){
    $('#languages').bind('change', languageChanged);

	navigator.globalization.getLocaleName(
    	function (localeValue) {
			WL.Logger.debug(">> Detected locale: " + localeValue.value);
			
			if (locale.indexOf("en",2)!=-1) languageChanged("english");
			if (locale.indexOf("fr",2)!=-1) languageChanged("french");
			if (locale.indexOf("ru",2)!=-1) languageChanged("russian");
			if (locale.indexOf("he",2)!=-1) languageChanged("hebrew");
		},
    	function() {
			WL.Logger.debug(">> Unable to detect locale.");
		}
	);
	
	navigator.globalization.getPreferredLanguage(
    	function (langValue) {
			lang = langValue.value;
			WL.Logger.debug(">> Detected language: " + langValue.value);
		},
    	function() {
			WL.Logger.debug(">> Unable to detect language.");
		}
	);
}

function languageChanged(lang) {
	if (typeof(lang)!="string")
		lang = $("#languages").val();
	
    switch (lang){
    	case "english":
    		setEnglish();
    		break;
    	case "french":
    		setFrench();
    		break;
    	case "russian":
    		setRussian();
    		break;
    	case "hebrew":
    		setHebrew();
    		break;
    }
    
    if ($("#languages").val()=="hebrew") {
    	$("#wrapper").css({direction: 'rtl'});
	} else {
    	$("#wrapper").css({direction: 'ltr'});
	}
    	
    $("#sampleText").html(Messages.sampleText);
    $("#headerText").html(Messages.headerText);
    $("#actionsLabel").html(Messages.actionsLabel);
}

function setFrench(){
	Messages.headerText = "Traduction";
	Messages.actionsLabel = "Sélectionnez langue:";
	Messages.sampleText = "ceci est un exemple de texte en français.";
}

function setRussian(){
	Messages.headerText = "Перевод";
	Messages.actionsLabel = "Выбор языка:";
	Messages.sampleText = "Это пример текста на русском языке.";
}

function setHebrew(){
	Messages.headerText = "תרגום";
	Messages.actionsLabel = "בחר שפה:";
	Messages.sampleText = "זו דוגמא של טקסט בעברית.";
}

function setEnglish(){
	Messages.headerText = "Translation";
	Messages.actionsLabel = "Select language:";
	Messages.sampleText = "This is a sample text in english.";
}

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },

    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, 'app.receivedEvent(...);' must be explicitly called.
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
	
	// Update the DOM on a received event.
	receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
	}
};

app.initialize();
