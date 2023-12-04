/*
 * https://rentry.org/teralomaniac_clewd
 * https://github.com/teralomaniac/clewd
 */

// SET YOUR COOKIE BELOW

module.exports = {
  Cookie:
    "sessionKey=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",
  CookieArray: [
    "sessionKey=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",
    "sessionKey=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",
    "sessionKey=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",
    "sessionKey=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",
    "sessionKey=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",
    "sessionKey=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",
    "sessionKey=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",
    "sessionKey=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",
  ],
  Cookiecounter: 3,
  CookieIndex: 0,
  ProxyPassword: "asdf",
  Ip: "127.0.0.1",
  Port: 8444,
  localtunnel: false,
  BufferSize: 1,
  SystemInterval: 3,
  rProxy: "https://claude.ai",
  api_rProxy: "",
  padtxt_placeholder: "",
  PromptExperimentFirst: "",
  PromptExperimentNext: "",
  PersonalityFormat: "{{char}}'s personality: {{personality}}",
  ScenarioFormat: "Dialogue scenario: {{scenario}}",
  Settings: {
    RenewAlways: true,
    RetryRegenerate: false,
    PromptExperiments: true,
    SystemExperiments: true,
    PreventImperson: false,
    AllSamples: false,
    NoSamples: false,
    StripAssistant: false,
    StripHuman: false,
    PassParams: false,
    ClearFlags: true,
    PreserveChats: false,
    LogMessages: true,
    FullColon: true,
    padtxt: 15000,
    xmlPlot: true,
    Superfetch: true,
  },
};

/*
 BufferSize
 * How many characters will be buffered before the AI types once
 * lower = less chance of `PreventImperson` working properly

 ---

 SystemInterval
 * How many messages until `SystemExperiments alternates`

 ---

 Other settings
 * https://gitgud.io/ahsk/clewd/#defaults
 * and
 * https://gitgud.io/ahsk/clewd/-/blob/master/CHANGELOG.md
 */
