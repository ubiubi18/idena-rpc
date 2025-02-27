const dnaApi = {
  title: "Dna API",
  endpoints: [
    {
      method: "dna_identities",
      title: "Get identities",
    },
    {
      method: "dna_identity",
      title: "Get identity",
      params: [{ title: "Address", name: "addr" }],
    },
    {
      method: "dna_state",
      title: "Get current process",
    },
    {
      method: "dna_getCoinbaseAddr",
      title: "Get coinbase address",
    },
    {
      method: "dna_getBalance",
      title: "Get balance",
      params: [{ title: "Address", name: "addr", required: true }],
    },
    {
      method: "dna_sendTransaction",
      title: "Send DNA",
      paramsAsObject: true,
      params: [
        {
          title: "Type",
          name: "type",
          type: "int",
          defaultValue: 0,
          hidden: true,
        },
        { title: "From", name: "from", required: true },
        { title: "To", name: "to", required: true },
        { title: "Amount", name: "amount" },
        {
          title: "Max Fee",
          type: "float",
          name: "maxFee",
          defaultValue: 0,
        },
        { title: "Nonce", type: "int", name: "nonce", defaultValue: 0 },
        { title: "Epoch", type: "int", name: "epoch", defaultValue: 0 },
      ],
    },
    {
      method: "dna_sendInvite",
      title: "Send invite",
      paramsAsObject: true,
      params: [
        { title: "To", name: "to" },
        { title: "Amount", name: "amount" },
        { title: "Nonce", type: "int", name: "nonce", defaultValue: 0 },
        { title: "Epoch", type: "int", name: "epoch", defaultValue: 0 },
      ],
    },
    {
      method: "dna_activateInvite",
      title: "Activate invite",
      paramsAsObject: true,
      params: [
        { title: "Key", name: "key" },
        { title: "To", name: "to", required: true },
        { title: "Nonce", type: "int", name: "nonce", defaultValue: 0 },
        { title: "Epoch", type: "int", name: "epoch", defaultValue: 0 },
      ],
    },
    {
      method: "dna_sendTransaction",
      title: "Kill identity",
      paramsAsObject: true,
      params: [
        {
          title: "Type",
          name: "type",
          type: "int",
          defaultValue: 3,
          hidden: true,
        },
        { title: "From", name: "from", required: true },
        { title: "To", name: "to", required: true },
        {
          title: "Max Fee",
          type: "float",
          name: "maxFee",
          defaultValue: 0,
        },
        { title: "Nonce", type: "int", name: "nonce", defaultValue: 0 },
        { title: "Epoch", type: "int", name: "epoch", defaultValue: 0 },
      ],
    },
    {
      method: "dna_sendTransaction",
      title: "Kill invitee",
      paramsAsObject: true,
      params: [
        {
          title: "Type",
          name: "type",
          type: "int",
          defaultValue: 10,
          hidden: true,
        },
        { title: "From", name: "from", required: true },
        { title: "To", name: "to", required: true },
        {
          title: "Max Fee",
          type: "float",
          name: "maxFee",
          defaultValue: 0,
        },
        { title: "Nonce", type: "int", name: "nonce", defaultValue: 0 },
        { title: "Epoch", type: "int", name: "epoch", defaultValue: 0 },
      ],
    },
    {
      method: "dna_sendTransaction",
      title: "Send TX",
      paramsAsObject: true,
      params: [
        {
          title: "Type",
          name: "type",
          type: "int",
          inputType: "select",
          values: [
            { value: 0, title: "SendTx" },
            { value: 1, title: "ActivationTx" },
            { value: 2, title: "InviteTx" },
            { value: 3, title: "KillTx" },
            { value: 4, title: "SubmitFlipTx" },
            { value: 5, title: "SubmitAnswersHashTx" },
            { value: 6, title: "SubmitShortAnswersTx" },
            { value: 7, title: "SubmitLongAnswersTx" },
            { value: 8, title: "EvidenceTx" },
            { value: 9, title: "OnlineStatusTx" },
            { value: 10, title: "KillInviteeTx" },
            { value: 11, title: "ChangeGodAddressTx" },
            { value: 12, title: "BurnTx" },
            { value: 13, title: "ChangeProfileTx" },
          ],
          defaultValue: 0,
        },
        { title: "From", name: "from", required: true },
        { title: "To", name: "to" },
        { title: "Amount", name: "amount", type: "float", defaultValue: 0 },
        {
          title: "Max Fee",
          type: "float",
          name: "maxFee",
          defaultValue: 0,
        },
        {
          title: "Tips",
          type: "float",
          name: "tips",
          defaultValue: 0,
        },
        { title: "Nonce", type: "int", name: "nonce", defaultValue: 0 },
        { title: "Epoch", type: "int", name: "epoch", defaultValue: 0 },
        { title: "Payload", name: "payload" },
      ],
    },
    {
      method: "dna_becomeOnline",
      title: "Become online",
      paramsAsObject: true,
      params: [
        { title: "Nonce", type: "int", name: "nonce", defaultValue: 0 },
        { title: "Epoch", type: "int", name: "epoch", defaultValue: 0 },
      ],
    },
    {
      method: "dna_becomeOffline",
      title: "Become offline",
      paramsAsObject: true,
      params: [
        { title: "Nonce", type: "int", name: "nonce", defaultValue: 0 },
        { title: "Epoch", type: "int", name: "epoch", defaultValue: 0 },
      ],
    },
    {
      method: "dna_delegate",
      title: "Delegate",
      paramsAsObject: true,
      params: [
        { title: "To", name: "to", required: true },
        { title: "Nonce", type: "int", name: "nonce", defaultValue: 0 },
        { title: "Epoch", type: "int", name: "epoch", defaultValue: 0 },
      ],
    },
    {
      method: "dna_undelegate",
      title: "Undelegate",
      paramsAsObject: true,
      params: [
        { title: "Nonce", type: "int", name: "nonce", defaultValue: 0 },
        { title: "Epoch", type: "int", name: "epoch", defaultValue: 0 },
      ],
    },
    {
      method: "dna_killDelegator",
      title: "Kill delegator",
      paramsAsObject: true,
      params: [
        { title: "To", name: "to", required: true },
        { title: "Nonce", type: "int", name: "nonce", defaultValue: 0 },
        { title: "Epoch", type: "int", name: "epoch", defaultValue: 0 },
      ],
    },
    {
      method: "dna_sendTransaction",
      title: "Change god address",
      paramsAsObject: true,
      params: [
        {
          title: "Type",
          name: "type",
          type: "int",
          defaultValue: 11,
          hidden: true,
        },
        { title: "From", name: "from", required: true },
        { title: "To", name: "to", required: true },
        {
          title: "Max Fee",
          type: "float",
          name: "maxFee",
          defaultValue: 0,
        },
        { title: "Nonce", type: "int", name: "nonce", defaultValue: 0 },
        { title: "Epoch", type: "int", name: "epoch", defaultValue: 0 },
      ],
    },
    {
      method: "dna_epoch",
      title: "Get epoch",
    },
    {
      method: "dna_ceremonyIntervals",
      title: "Get ceremony intervals",
    },
    {
      method: "dna_exportKey",
      title: "Export key",
      params: [{ title: "Password", name: "pasword", required: true }],
    },
    {
      method: "dna_burn",
      title: "Burn DNA",
      paramsAsObject: true,
      params: [
        { title: "From", name: "from", required: true },
        { title: "Amount", name: "amount", type: "float", defaultValue: 0 },
        { title: "Key", name: "key" },
        {
          title: "Max Fee",
          type: "float",
          name: "maxFee",
          defaultValue: 0,
        },
        { title: "Nonce", type: "int", name: "nonce", defaultValue: 0 },
        { title: "Epoch", type: "int", name: "epoch", defaultValue: 0 },
      ],
    },
    {
      method: "dna_changeProfile",
      title: "Change profile (deprecated)",
      paramsAsObject: true,
      params: [
        { title: "Info", name: "info" },
        { title: "Nickname", name: "nickname" },
        {
          title: "Max Fee",
          type: "float",
          name: "maxFee",
          defaultValue: 0,
        },
      ],
    },
    {
      method: "dna_sendChangeProfileTx",
      title: "Send change profile tx",
      paramsAsObject: true,
      params: [
        { title: "Sender", name: "sender" },
        { title: "Cid", name: "cid" },
        {
          title: "Max Fee",
          type: "float",
          name: "maxFee",
          defaultValue: 0,
        },
      ],
    },
    {
      method: "dna_profile",
      title: "Get profile (deprecated)",
      params: [{ title: "Address", name: "address" }],
    },    
    {
      method: "dna_activateInviteToRandAddr",
      title: "Activate invite to random address",
      paramsAsObject: true,
      params: [
        { title: "Key", name: "key", required: true },
        { title: "Nonce", type: "int", name: "nonce", defaultValue: 0 },
        { title: "Epoch", type: "int", name: "epoch", defaultValue: 0 },
      ],
    },
    {
      method: "dna_storeToIpfs",
      title: "Broadcast store to ipfs tx",
      paramsAsObject: true,
      params: [
        { title: "Cid", name: "cid" },
        { title: "Nonce", type: "int", name: "nonce", defaultValue: 0 },
        { title: "Epoch", type: "int", name: "epoch", defaultValue: 0 },
      ],
    },
  ],
};
export default dnaApi;
