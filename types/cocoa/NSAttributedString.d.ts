/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAttributedString<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSMutableCopyingProtocol, NSSecureCodingProtocol {
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    classForCoder<R = unknown>(): R;
    enumerateAttribute_inRange_options_usingBlock<R = void, P0 = unknown, P1 = _NSRange, P2 = number, P3 = CDUnknownBlockType>(_enumerateAttribute: P0, _inRange: P1, _options: P2, _usingBlock: P3): R;
    enumerateAttributesInRange_options_usingBlock<R = void, P0 = _NSRange, P1 = number, P2 = CDUnknownBlockType>(_enumerateAttributesInRange: P0, _options: P1, _usingBlock: P2): R;
    attribute_atIndex_longestEffectiveRange_inRange<R = unknown, P0 = unknown, P1 = number, P2 = _NSRange, P3 = _NSRange>(_attribute: P0, _atIndex: P1, _longestEffectiveRange: P2, _inRange: P3): R;
    attributesAtIndex_longestEffectiveRange_inRange<R = unknown, P0 = number, P1 = _NSRange, P2 = _NSRange>(_attributesAtIndex: P0, _longestEffectiveRange: P1, _inRange: P2): R;
    description<R = unknown>(): R;
    isEqualToAttributedString<R = boolean, P0 = unknown>(_isEqualToAttributedString: P0): R;
    hash<R = number>(): R;
    length<R = number>(): R;
    attributedStringByWeaklyAddingAttributes<R = unknown, P0 = unknown>(_attributedStringByWeaklyAddingAttributes: P0): R;
    attributedSubstringFromRange_replacingCharactersInRanges_numberOfRanges_withString<R = unknown, P0 = _NSRange, P1 = _NSRange, P2 = number, P3 = unknown>(_attributedSubstringFromRange: P0, _replacingCharactersInRanges: P1, _numberOfRanges: P2, _withString: P3): R;
    attributedSubstringFromRange<R = unknown, P0 = _NSRange>(_attributedSubstringFromRange: P0): R;
    attribute_atIndex_effectiveRange<R = unknown, P0 = unknown, P1 = number, P2 = _NSRange>(_attribute: P0, _atIndex: P1, _effectiveRange: P2): R;
    attributesAtIndex_effectiveRange<R = unknown, P0 = number, P1 = _NSRange>(_attributesAtIndex: P0, _effectiveRange: P1): R;
    scriptingContains<R = boolean, P0 = unknown>(_scriptingContains: P0): R;
    scriptingEndsWith<R = boolean, P0 = unknown>(_scriptingEndsWith: P0): R;
    scriptingBeginsWith<R = boolean, P0 = unknown>(_scriptingBeginsWith: P0): R;
    scriptingIsGreaterThan<R = boolean, P0 = unknown>(_scriptingIsGreaterThan: P0): R;
    scriptingIsGreaterThanOrEqualTo<R = boolean, P0 = unknown>(_scriptingIsGreaterThanOrEqualTo: P0): R;
    scriptingIsLessThan<R = boolean, P0 = unknown>(_scriptingIsLessThan: P0): R;
    scriptingIsLessThanOrEqualTo<R = boolean, P0 = unknown>(_scriptingIsLessThanOrEqualTo: P0): R;
    scriptingIsEqualTo<R = boolean, P0 = unknown>(_scriptingIsEqualTo: P0): R;
    _attributesAreEqualToAttributesInAttributedString<R = boolean, P0 = unknown>(__attributesAreEqualToAttributesInAttributedString: P0): R;
    _createAttributedSubstringWithRange<R = unknown, P0 = _NSRange>(__createAttributedSubstringWithRange: P0): R;
    _cfTypeID<R = number>(): R;
    replacementObjectForPortCoder<R = unknown, P0 = unknown>(_replacementObjectForPortCoder: P0): R;
    string<R = NSString>(): R;
    // + NSAttributedString(KitAddition): 
    docFormatFromRange_documentAttributes<R = unknown, P0 = _NSRange, P1 = unknown>(_docFormatFromRange: P0, _documentAttributes: P1): R;
    RTFDFileWrapperFromRange_documentAttributes<R = unknown, P0 = _NSRange, P1 = unknown>(_RTFDFileWrapperFromRange: P0, _documentAttributes: P1): R;
    RTFDFromRange_documentAttributes<R = unknown, P0 = _NSRange, P1 = unknown>(_RTFDFromRange: P0, _documentAttributes: P1): R;
    RTFFromRange_documentAttributes<R = unknown, P0 = _NSRange, P1 = unknown>(_RTFFromRange: P0, _documentAttributes: P1): R;
    // + NSAttributedString(NSAttributedStringAttachmentConveniences): 
    _attachmentFileWrapperDescription<R = unknown, P0 = boolean>(__attachmentFileWrapperDescription: P0): R;
    // + NSAttributedString(NSAttributedStringDeprecatedKitAdditions): 
    URLAtIndex_effectiveRange<R = unknown, P0 = number, P1 = _NSRange>(_URLAtIndex: P0, _effectiveRange: P1): R;
    // + NSAttributedString(NSAttributedStringPasteboardAdditions): 
    pasteboardPropertyListForType<R = unknown, P0 = unknown>(_pasteboardPropertyListForType: P0): R;
    writingOptionsForType_pasteboard<R = number, P0 = unknown, P1 = unknown>(_writingOptionsForType: P0, _pasteboard: P1): R;
    writableTypesForPasteboard<R = unknown, P0 = unknown>(_writableTypesForPasteboard: P0): R;
    initWithPasteboardPropertyList_ofType<R = unknown, P0 = unknown, P1 = unknown>(_initWithPasteboardPropertyList: P0, _ofType: P1): R;
    // + NSAttributedString(NSStringDrawingExtension): 
    _drawCenteredVerticallyInRect_options_scrollable_styleEffectConfiguration_referenceCell_referenceView<R = CGRect, P0 = CGRect, P1 = number, P2 = boolean, P3 = unknown, P4 = unknown, P5 = unknown>(__drawCenteredVerticallyInRect: P0, _options: P1, _scrollable: P2, _styleEffectConfiguration: P3, _referenceCell: P4, _referenceView: P5): R;
    _drawCenteredVerticallyInRect_scrollable_styledTextOptions<R = CGRect, P0 = CGRect, P1 = boolean, P2 = unknown>(__drawCenteredVerticallyInRect: P0, _scrollable: P1, _styledTextOptions: P2): R;
    _drawCenteredVerticallyInRect<R = CGRect, P0 = CGRect>(__drawCenteredVerticallyInRect: P0): R;
    _sizeWithSize<R = CGSize, P0 = CGSize>(__sizeWithSize: P0): R;
    // + NSAttributedString(NSTextScriptingAdditions): 
    attachments<R = unknown>(): R;
    // + NSAttributedString(CHAttributedString): 
    attributesMatch_comparison<R = boolean, P0 = unknown, P1 = CDUnknownBlockType>(_attributesMatch: P0, _comparison: P1): R;
    attributesMatch<R = boolean, P0 = unknown>(_attributesMatch: P0): R;
    attributeOrNil_atIndex<R = unknown, P0 = unknown, P1 = number>(_attributeOrNil: P0, _atIndex: P1): R;
    // + NSAttributedString(Chocolat): 
    attributedStringWithHighlightColor<R = unknown, P0 = unknown>(_attributedStringWithHighlightColor: P0): R;
    // + NSAttributedString(ColorSpaceConversion): 
    translatedToColorSpace<R = unknown, P0 = unknown>(_translatedToColorSpace: P0): R;
    convertedToColorSpace<R = unknown, P0 = unknown>(_convertedToColorSpace: P0): R;
    attributedStringWithDocumentColorSpace_convert<R = unknown, P0 = unknown, P1 = boolean>(_attributedStringWithDocumentColorSpace: P0, _convert: P1): R;
    standardAttributedStringWithDocumentColorSpace<R = unknown, P0 = unknown>(_standardAttributedStringWithDocumentColorSpace: P0): R;
    // + NSAttributedString(MSAttributedStringInternalSupport): 
    initWithString_attributedStringAttributes<R = unknown, P0 = unknown, P1 = unknown>(_initWithString: P0, _attributedStringAttributes: P1): R;
    attributedStringAttributes<R = unknown>(): R;
    attributedStringByApplyingBlock<R = unknown, P0 = CDUnknownBlockType>(_attributedStringByApplyingBlock: P0): R;
    // + NSAttributedString(MSBaseArchiver): 
    initWithUnarchiver<R = unknown, P0 = unknown>(_initWithUnarchiver: P0): R;
    encodeWithArchiver<R = void, P0 = unknown>(_encodeWithArchiver: P0): R;
    // + NSAttributedString(MSList): 
    attributeForKey<R = unknown, P0 = unknown>(_attributeForKey: P0): R;
    currentListStyle<R = unknown>(): R;
    // + NSAttributedString(TreeAsDictionarySupport): 
    treeAsDictionary<R = unknown>(): R;
    // + NSAttributedString(NSAttributedStringPasteboardAdditions):
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
    // + NSAttributedString(MSBaseArchiver):
    archiveReferenceIdentifier_bc<R = NSString>(): R;
  }
  namespace NSAttributedString {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSMutableCopyingProtocol, NSSecureCodingProtocol {
      alloc<R = NSAttributedString>(): R;
      new: <R = NSAttributedString>() => R;
      allocWithZone<R = unknown, P0 = _NSZone>(_allocWithZone: P0): R;
      _setAttributedDictionaryClass<R = void, P0 = unknown>(__setAttributedDictionaryClass: P0): R;
      // + NSAttributedString(KitAddition): 
      writableTextFileTypesForDocumentTypes<R = unknown>(): R;
      // + NSAttributedString(NSAttributedStringAttachmentConveniences): 
      attributedStringWithAttachment<R = unknown, P0 = unknown>(_attributedStringWithAttachment: P0): R;
      // + NSAttributedString(NSAttributedStringDeprecatedKitAdditions): 
      textUnfilteredPasteboardTypes<R = unknown>(): R;
      textUnfilteredFileTypes<R = unknown>(): R;
      textPasteboardTypes<R = unknown>(): R;
      textFileTypes<R = unknown>(): R;
      // + NSAttributedString(NSAttributedStringPasteboardAdditions): 
      readingOptionsForType_pasteboard<R = number, P0 = unknown, P1 = unknown>(_readingOptionsForType: P0, _pasteboard: P1): R;
      readableTypesForPasteboard<R = unknown, P0 = unknown>(_readableTypesForPasteboard: P0): R;
      textTypes<R = unknown>(): R;
      textUnfilteredTypes<R = unknown>(): R;
      // + NSAttributedString(CHAttributedStringAdditions): 
      attributedStringWithString_font<R = unknown, P0 = unknown, P1 = unknown>(_attributedStringWithString: P0, _font: P1): R;
      attributedStringWithString_attributes<R = unknown, P0 = unknown, P1 = unknown>(_attributedStringWithString: P0, _attributes: P1): R;
    }
  }
}

declare const NSAttributedString: cocoa.NSAttributedString.CLASS;
