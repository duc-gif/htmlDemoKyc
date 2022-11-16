const element = document.getElementById("passbase-button");
const apiKey =
  "49ab129a42f3bd68094d83d742e92750a0416a57224dcd013288a2e08be5c63c";
Passbase.renderButton(element, apiKey, {
  prefillAttributes: {},
  onFinish: (identityAccessKey) => {},
  onError: (errorCode) => {},
  onStart: () => {}
});
