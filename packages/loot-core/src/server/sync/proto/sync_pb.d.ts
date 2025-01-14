// package:
// file: sync.proto

import * as jspb from 'google-protobuf';

export class EncryptedData extends jspb.Message {
  getIv(): Uint8Array | string;
  getIv_asU8(): Uint8Array;
  getIv_asB64(): string;
  setIv(value: Uint8Array | string): void;

  getAuthtag(): Uint8Array | string;
  getAuthtag_asU8(): Uint8Array;
  getAuthtag_asB64(): string;
  setAuthtag(value: Uint8Array | string): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EncryptedDataAsObject;
  static toObject(
    includeInstance: boolean,
    msg: EncryptedData,
  ): EncryptedDataAsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: EncryptedData,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): EncryptedData;
  static deserializeBinaryFromReader(
    message: EncryptedData,
    reader: jspb.BinaryReader,
  ): EncryptedData;
}

export type EncryptedDataAsObject = {
  iv: Uint8Array | string;
  authtag: Uint8Array | string;
  data: Uint8Array | string;
};

export class Message extends jspb.Message {
  getDataset(): string;
  setDataset(value: string): void;

  getRow(): string;
  setRow(value: string): void;

  getColumn(): string;
  setColumn(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageAsObject;
  static toObject(includeInstance: boolean, msg: Message): MessageAsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: Message,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): Message;
  static deserializeBinaryFromReader(
    message: Message,
    reader: jspb.BinaryReader,
  ): Message;
}

export type MessageAsObject = {
  dataset: string;
  row: string;
  column: string;
  value: string;
};

export class MessageEnvelope extends jspb.Message {
  getTimestamp(): string;
  setTimestamp(value: string): void;

  getIsencrypted(): boolean;
  setIsencrypted(value: boolean): void;

  getContent(): Uint8Array | string;
  getContent_asU8(): Uint8Array;
  getContent_asB64(): string;
  setContent(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageEnvelopeAsObject;
  static toObject(
    includeInstance: boolean,
    msg: MessageEnvelope,
  ): MessageEnvelopeAsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: MessageEnvelope,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): MessageEnvelope;
  static deserializeBinaryFromReader(
    message: MessageEnvelope,
    reader: jspb.BinaryReader,
  ): MessageEnvelope;
}

export type MessageEnvelopeAsObject = {
  timestamp: string;
  isencrypted: boolean;
  content: Uint8Array | string;
};

export class SyncRequest extends jspb.Message {
  clearMessagesList(): void;
  getMessagesList(): Array<MessageEnvelope>;
  setMessagesList(value: Array<MessageEnvelope>): void;
  addMessages(value?: MessageEnvelope, index?: number): MessageEnvelope;

  getFileid(): string;
  setFileid(value: string): void;

  getGroupid(): string;
  setGroupid(value: string): void;

  getKeyid(): string;
  setKeyid(value: string): void;

  getSince(): string;
  setSince(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SyncRequestAsObject;
  static toObject(
    includeInstance: boolean,
    msg: SyncRequest,
  ): SyncRequestAsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: SyncRequest,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): SyncRequest;
  static deserializeBinaryFromReader(
    message: SyncRequest,
    reader: jspb.BinaryReader,
  ): SyncRequest;
}

export type SyncRequestAsObject = {
  messagesList: Array<MessageEnvelopeAsObject>;
  fileid: string;
  groupid: string;
  keyid: string;
  since: string;
};

export class SyncResponse extends jspb.Message {
  clearMessagesList(): void;
  getMessagesList(): Array<MessageEnvelope>;
  setMessagesList(value: Array<MessageEnvelope>): void;
  addMessages(value?: MessageEnvelope, index?: number): MessageEnvelope;

  getMerkle(): string;
  setMerkle(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SyncResponseAsObject;
  static toObject(
    includeInstance: boolean,
    msg: SyncResponse,
  ): SyncResponseAsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: SyncResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): SyncResponse;
  static deserializeBinaryFromReader(
    message: SyncResponse,
    reader: jspb.BinaryReader,
  ): SyncResponse;
}

export type SyncResponseAsObject = {
  messagesList: Array<MessageEnvelopeAsObject>;
  merkle: string;
};
