/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAEDescriptorTranslator<T0 = void, T1 = void, T2 = void> extends NSObject {
    descriptorByTranslatingObject_ofType_inSuite<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_descriptorByTranslatingObject: P0, _ofType: P1, _inSuite: P2): R;
    objectByTranslatingDescriptor_toType_inSuite<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_objectByTranslatingDescriptor: P0, _toType: P1, _inSuite: P2): R;
    registerTranslator_selector_toTranslateFromClass<R = void, P0 = unknown, P1 = string, P2 = unknown>(_registerTranslator: P0, _selector: P1, _toTranslateFromClass: P2): R;
    registerTranslator_selector_toTranslateFromDescriptorType<R = void, P0 = unknown, P1 = string, P2 = number>(_registerTranslator: P0, _selector: P1, _toTranslateFromDescriptorType: P2): R;
    dealloc<R = void>(): R;
    _setUpFoundationTranslations<R = void>(): R;
    // + NSAEDescriptorTranslator(NSAppKitTranslations): 
    _setUpAppKitTranslations<R = void>(): R;
  }
  namespace NSAEDescriptorTranslator {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSAEDescriptorTranslator>(): R;
      new: <R = NSAEDescriptorTranslator>() => R;
      sharedAEDescriptorTranslator<R = unknown>(): R;
      _descriptorByTranslatingDictionary_ofType_inSuite<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(__descriptorByTranslatingDictionary: P0, _ofType: P1, _inSuite: P2): R;
      _descriptorByTranslatingDate_ofType_inSuite<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(__descriptorByTranslatingDate: P0, _ofType: P1, _inSuite: P2): R;
      _descriptorByTranslatingData_ofType_inSuite<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(__descriptorByTranslatingData: P0, _ofType: P1, _inSuite: P2): R;
      _descriptorByTranslatingArray_ofObjectsOfType_inSuite<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(__descriptorByTranslatingArray: P0, _ofObjectsOfType: P1, _inSuite: P2): R;
      _descriptorByTranslatingNumber_ofType_inSuite<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(__descriptorByTranslatingNumber: P0, _ofType: P1, _inSuite: P2): R;
      _descriptorByTranslatingString_ofType_inSuite<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(__descriptorByTranslatingString: P0, _ofType: P1, _inSuite: P2): R;
      _stringByTranslatingAliasDescriptor_toType_inSuite<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(__stringByTranslatingAliasDescriptor: P0, _toType: P1, _inSuite: P2): R;
      _stringByTranslatingFSSpecDescriptor_toType_inSuite<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(__stringByTranslatingFSSpecDescriptor: P0, _toType: P1, _inSuite: P2): R;
      _dateByTranslatingLongDateTimeDescriptor_toType_inSuite<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(__dateByTranslatingLongDateTimeDescriptor: P0, _toType: P1, _inSuite: P2): R;
      _valueByTranslatingOSAErrorRangeDescriptor_toType_inSuite<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(__valueByTranslatingOSAErrorRangeDescriptor: P0, _toType: P1, _inSuite: P2): R;
      _numberByTranslatingNumericDescriptor_toType_inSuite<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(__numberByTranslatingNumericDescriptor: P0, _toType: P1, _inSuite: P2): R;
      _stringByTranslatingTextDescriptor_toType_inSuite<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(__stringByTranslatingTextDescriptor: P0, _toType: P1, _inSuite: P2): R;
      _arrayByTranslatingAEList_toType_inSuite<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(__arrayByTranslatingAEList: P0, _toType: P1, _inSuite: P2): R;
      _dictionaryByTranslatingAERecord_toType_inSuite<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(__dictionaryByTranslatingAERecord: P0, _toType: P1, _inSuite: P2): R;
      _propertyContainerClassDescriptionFromDictionaryType_inSuite<R = unknown, P0 = unknown, P1 = unknown>(__propertyContainerClassDescriptionFromDictionaryType: P0, _inSuite: P1): R;
      _descriptorByTranslatingNull_ofType_inSuite<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(__descriptorByTranslatingNull: P0, _ofType: P1, _inSuite: P2): R;
      // + NSAEDescriptorTranslator(NSAppKitTranslations): 
      _descriptorByTranslatingTextStorage_ofType_inSuite<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(__descriptorByTranslatingTextStorage: P0, _ofType: P1, _inSuite: P2): R;
      _textStorageByTranslatingRTFDescriptor_toType_inSuite<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(__textStorageByTranslatingRTFDescriptor: P0, _toType: P1, _inSuite: P2): R;
      _descriptorByTranslatingColor_ofType_inSuite<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(__descriptorByTranslatingColor: P0, _ofType: P1, _inSuite: P2): R;
      _colorByTranslatingRGBColorDescriptor_toType_inSuite<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(__colorByTranslatingRGBColorDescriptor: P0, _toType: P1, _inSuite: P2): R;
    }
  }
}

declare const NSAEDescriptorTranslator: cocoa.NSAEDescriptorTranslator.CLASS;
