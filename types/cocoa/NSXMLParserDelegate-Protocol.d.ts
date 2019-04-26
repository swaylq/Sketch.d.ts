/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSXMLParserDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    parser_validationErrorOccurred<R = void, P0 = NSXMLParser, P1 = NSError>(_parser: P0, _validationErrorOccurred: P1): R;
    parser_parseErrorOccurred<R = void, P0 = NSXMLParser, P1 = NSError>(_parser: P0, _parseErrorOccurred: P1): R;
    parser_resolveExternalEntityName_systemID<R = NSData, P0 = NSXMLParser, P1 = NSString, P2 = NSString>(_parser: P0, _resolveExternalEntityName: P1, _systemID: P2): R;
    parser_foundCDATA<R = void, P0 = NSXMLParser, P1 = NSData>(_parser: P0, _foundCDATA: P1): R;
    parser_foundComment<R = void, P0 = NSXMLParser, P1 = NSString>(_parser: P0, _foundComment: P1): R;
    parser_foundProcessingInstructionWithTarget_data<R = void, P0 = NSXMLParser, P1 = NSString, P2 = NSString>(_parser: P0, _foundProcessingInstructionWithTarget: P1, _data: P2): R;
    parser_foundIgnorableWhitespace<R = void, P0 = NSXMLParser, P1 = NSString>(_parser: P0, _foundIgnorableWhitespace: P1): R;
    parser_foundCharacters<R = void, P0 = NSXMLParser, P1 = NSString>(_parser: P0, _foundCharacters: P1): R;
    parser_didEndMappingPrefix<R = void, P0 = NSXMLParser, P1 = NSString>(_parser: P0, _didEndMappingPrefix: P1): R;
    parser_didStartMappingPrefix_toURI<R = void, P0 = NSXMLParser, P1 = NSString, P2 = NSString>(_parser: P0, _didStartMappingPrefix: P1, _toURI: P2): R;
    parser_didEndElement_namespaceURI_qualifiedName<R = void, P0 = NSXMLParser, P1 = NSString, P2 = NSString, P3 = NSString>(_parser: P0, _didEndElement: P1, _namespaceURI: P2, _qualifiedName: P3): R;
    parser_didStartElement_namespaceURI_qualifiedName_attributes<R = void, P0 = NSXMLParser, P1 = NSString, P2 = NSString, P3 = NSString, P4 = NSDictionary>(_parser: P0, _didStartElement: P1, _namespaceURI: P2, _qualifiedName: P3, _attributes: P4): R;
    parser_foundExternalEntityDeclarationWithName_publicID_systemID<R = void, P0 = NSXMLParser, P1 = NSString, P2 = NSString, P3 = NSString>(_parser: P0, _foundExternalEntityDeclarationWithName: P1, _publicID: P2, _systemID: P3): R;
    parser_foundInternalEntityDeclarationWithName_value<R = void, P0 = NSXMLParser, P1 = NSString, P2 = NSString>(_parser: P0, _foundInternalEntityDeclarationWithName: P1, _value: P2): R;
    parser_foundElementDeclarationWithName_model<R = void, P0 = NSXMLParser, P1 = NSString, P2 = NSString>(_parser: P0, _foundElementDeclarationWithName: P1, _model: P2): R;
    parser_foundAttributeDeclarationWithName_forElement_type_defaultValue<R = void, P0 = NSXMLParser, P1 = NSString, P2 = NSString, P3 = NSString, P4 = NSString>(_parser: P0, _foundAttributeDeclarationWithName: P1, _forElement: P2, _type: P3, _defaultValue: P4): R;
    parser_foundUnparsedEntityDeclarationWithName_publicID_systemID_notationName<R = void, P0 = NSXMLParser, P1 = NSString, P2 = NSString, P3 = NSString, P4 = NSString>(_parser: P0, _foundUnparsedEntityDeclarationWithName: P1, _publicID: P2, _systemID: P3, _notationName: P4): R;
    parser_foundNotationDeclarationWithName_publicID_systemID<R = void, P0 = NSXMLParser, P1 = NSString, P2 = NSString, P3 = NSString>(_parser: P0, _foundNotationDeclarationWithName: P1, _publicID: P2, _systemID: P3): R;
    parserDidEndDocument<R = void, P0 = NSXMLParser>(_parserDidEndDocument: P0): R;
    parserDidStartDocument<R = void, P0 = NSXMLParser>(_parserDidStartDocument: P0): R;
  }
  namespace NSXMLParserDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
