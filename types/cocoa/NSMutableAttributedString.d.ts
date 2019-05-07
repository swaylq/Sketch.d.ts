/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMutableAttributedString<T0 = void, T1 = void, T2 = void> extends NSAttributedString {
    endEditing<R = void>(): R;
    beginEditing<R = void>(): R;
    setAttributedString<R = void, P0 = unknown>(_setAttributedString: P0): R;
    deleteCharactersInRange<R = void, P0 = _NSRange>(_deleteCharactersInRange: P0): R;
    appendAttributedString<R = void, P0 = unknown>(_appendAttributedString: P0): R;
    insertAttributedString_atIndex<R = void, P0 = unknown, P1 = number>(_insertAttributedString: P0, _atIndex: P1): R;
    replaceCharactersInRange_withAttributedString<R = void, P0 = _NSRange, P1 = unknown>(_replaceCharactersInRange: P0, _withAttributedString: P1): R;
    removeAttribute_range<R = void, P0 = unknown, P1 = _NSRange>(_removeAttribute: P0, _range: P1): R;
    addAttributesWeakly_range<R = void, P0 = unknown, P1 = _NSRange>(_addAttributesWeakly: P0, _range: P1): R;
    addAttributes_range<R = void, P0 = unknown, P1 = _NSRange>(_addAttributes: P0, _range: P1): R;
    addAttribute_value_range<R = void, P0 = unknown, P1 = unknown, P2 = _NSRange>(_addAttribute: P0, _value: P1, _range: P2): R;
    mutableString<R = unknown>(): R;
    setAttributes_range<R = void, P0 = unknown, P1 = _NSRange>(_setAttributes: P0, _range: P1): R;
    replaceCharactersInRange_withString<R = void, P0 = _NSRange, P1 = unknown>(_replaceCharactersInRange: P0, _withString: P1): R;
    // + NSMutableAttributedString(NSMutableAttributedStringAttachmentConveniences): 
    updateAttachmentsFromPath<R = void, P0 = unknown>(_updateAttachmentsFromPath: P0): R;
    // + NSMutableAttributedString(CHMutableAttributedStringAdditions): 
    appendString_attributes<R = void, P0 = unknown, P1 = unknown>(_appendString: P0, _attributes: P1): R;
    // + NSMutableAttributedString(MSList): 
    paragraphStyle<R = unknown>(): R;
    stringByStrippingMarkers_oldList_index<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(_stringByStrippingMarkers: P0, _oldList: P1, _index: P2): R;
    stringByStrippingNewlinesSpacesAndTabs<R = unknown, P0 = unknown>(_stringByStrippingNewlinesSpacesAndTabs: P0): R;
    stripListMarkers_oldList_lineIndex<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(_stripListMarkers: P0, _oldList: P1, _lineIndex: P2): R;
    strippedLinesFromTextStorage_oldList<R = unknown, P0 = unknown, P1 = unknown>(_strippedLinesFromTextStorage: P0, _oldList: P1): R;
    combineLines_intoList<R = unknown, P0 = unknown, P1 = unknown>(_combineLines: P0, _intoList: P1): R;
    normalTabStops<R = unknown>(): R;
    listTabStops<R = unknown>(): R;
    updateListFrom_toList<R = void, P0 = unknown, P1 = unknown>(_updateListFrom: P0, _toList: P1): R;
    updateListStyle<R = void, P0 = unknown>(_updateListStyle: P0): R;
    // + NSMutableAttributedString(Stripping): 
    removeUnsupportedAttributes<R = void>(): R;
  }
  namespace NSMutableAttributedString {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSAttributedString {
      alloc<R = NSMutableAttributedString>(): R;
      new: <R = NSMutableAttributedString>() => R;
  
  }
  }
}

declare const NSMutableAttributedString: cocoa.NSMutableAttributedString.CLASS;
