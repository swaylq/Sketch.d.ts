/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAttributedString<T0 = void, T1 = void, T2 = void> extends NSObject, MSCodingProtocol, NSCopyingProtocol {
    cxx_destruct<R = void>(): R;
    propertiesAreEqual<R = boolean, P0 = unknown>(_propertiesAreEqual: P0): R;
    debugDescription<R = unknown>(): R;
    immutableModelObject<R = unknown>(): R;
    attributedStringByReplacingFontNames<R = unknown, P0 = unknown>(_attributedStringByReplacingFontNames: P0): R;
    calculateUnavailableFontNames<R = unknown>(): R;
    calculateTransformedAttributedStringFromAtrributedString<R = unknown, P0 = unknown>(_calculateTransformedAttributedStringFromAtrributedString: P0): R;
    calculateAttributedString<R = unknown>(): R;
    hash<R = number>(): R;
    encodeAsJSON<R = void, P0 = unknown>(_encodeAsJSON: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    initWithAttributedString_documentColorSpace<R = unknown, P0 = unknown, P1 = unknown>(_initWithAttributedString: P0, _documentColorSpace: P1): R;
    initWithAttributedString_colorSpace_convert<R = unknown, P0 = unknown, P1 = unknown, P2 = boolean>(_initWithAttributedString: P0, _colorSpace: P1, _convert: P2): R;
    initWithEncodedAttributedString<R = unknown, P0 = unknown>(_initWithEncodedAttributedString: P0): R;
    treeAsDictionary<R = unknown>(): R;
    encodedAttributedString<R = NSAttributedString>(): R;
    areRequiredFontsAvailable<R = boolean>(): R;
    unavailableFontNames<R = NSSet>(): R;
    fontNames<R = NSSet>(): R;
    fontDescriptors<R = NSSet>(): R;
    transformedAttributedString<R = NSAttributedString>(): R;
    attributedString<R = NSAttributedString>(): R;
    string<R = NSString>(): R;
    archiveReferenceIdentifier_bc<R = NSString>(): R;
  }
  namespace MSAttributedString {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, MSCodingProtocol, NSCopyingProtocol {
      alloc<R = MSAttributedString>(): R;
      new: <R = MSAttributedString>() => R;
      isRequiredFontAvailableInDictionary<R = boolean, P0 = unknown>(_isRequiredFontAvailableInDictionary: P0): R;
      fontDescriptorInDictionary<R = unknown, P0 = unknown>(_fontDescriptorInDictionary: P0): R;
      attributedStringWithRefreshedFontDescriptors<R = unknown, P0 = unknown>(_attributedStringWithRefreshedFontDescriptors: P0): R;
      decodeAttributedString<R = unknown, P0 = unknown>(_decodeAttributedString: P0): R;
      encodeAttributedString<R = unknown, P0 = unknown>(_encodeAttributedString: P0): R;
      refreshFontDescriptorsInDictionary<R = unknown, P0 = unknown>(_refreshFontDescriptorsInDictionary: P0): R;
      decodeAttributesInDictionary<R = unknown, P0 = unknown>(_decodeAttributesInDictionary: P0): R;
      encodeAttributesInDictionary<R = unknown, P0 = unknown>(_encodeAttributesInDictionary: P0): R;
    }
  }
}

declare const MSAttributedString: cocoa.MSAttributedString.CLASS;
