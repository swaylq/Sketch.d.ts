/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorList<T0 = void, T1 = void, T2 = void> extends NSObject, NSSecureCodingProtocol {
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    _encodeWithoutNameWithCoder_newStyle<R = void, P0 = unknown, P1 = boolean>(__encodeWithoutNameWithCoder: P0, _newStyle: P1): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    _decodeWithoutNameWithCoder_newStyle<R = void, P0 = unknown, P1 = boolean>(__decodeWithoutNameWithCoder: P0, _newStyle: P1): R;
    awakeAfterUsingCoder<R = unknown, P0 = unknown>(_awakeAfterUsingCoder: P0): R;
    writeToFile<R = boolean, P0 = unknown>(_writeToFile: P0): R;
    writeToURL_error<R = boolean, P0 = unknown, P1 = unknown>(_writeToURL: P0, _error: P1): R;
    _writeToURL_keyedArchive_error<R = boolean, P0 = unknown, P1 = boolean, P2 = unknown>(__writeToURL: P0, _keyedArchive: P1, _error: P2): R;
    _changed<R = void, P0 = unknown>(__changed: P0): R;
    _isUpdated<R = boolean>(): R;
    _setUpdated<R = void, P0 = boolean>(__setUpdated: P0): R;
    _localizedColorListCopyrightString<R = unknown>(): R;
    _localizedColorListName<R = unknown>(): R;
    _localizedNameForColorWithName<R = unknown, P0 = unknown>(__localizedNameForColorWithName: P0): R;
    _localizedKeyFromBundleStringFileForKey<R = unknown, P0 = unknown>(__localizedKeyFromBundleStringFileForKey: P0): R;
    colorWithKey<R = unknown, P0 = unknown>(_colorWithKey: P0): R;
    removeColorWithKey<R = void, P0 = unknown>(_removeColorWithKey: P0): R;
    _rawAddColor_key<R = void, P0 = unknown, P1 = unknown>(__rawAddColor: P0, _key: P1): R;
    insertColor_key_atIndex<R = void, P0 = unknown, P1 = unknown, P2 = number>(_insertColor: P0, _key: P1, _atIndex: P2): R;
    setColor_forKey<R = void, P0 = unknown, P1 = unknown>(_setColor: P0, _forKey: P1): R;
    _rename_as<R = boolean, P0 = unknown, P1 = unknown>(__rename: P0, _as: P1): R;
    _loadColors<R = boolean>(): R;
    _parsePantoneLikeList_fileName<R = boolean, P0 = unknown, P1 = unknown>(__parsePantoneLikeList: P0, _fileName: P1): R;
    _parseArchivedList<R = boolean, P0 = unknown>(__parseArchivedList: P0): R;
    _parseReleaseTwoList<R = boolean, P0 = unknown>(__parseReleaseTwoList: P0): R;
    _parseKeyedArchivedList<R = boolean, P0 = unknown>(__parseKeyedArchivedList: P0): R;
    removeFile<R = void>(): R;
    dealloc<R = void>(): R;
    initWithName_fromFile<R = unknown, P0 = unknown, P1 = unknown>(_initWithName: P0, _fromFile: P1): R;
    initWithName<R = unknown, P0 = unknown>(_initWithName: P0): R;
    _initWithName_fromPath_forDeviceType_lazy<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = boolean>(__initWithName: P0, _fromPath: P1, _forDeviceType: P2, _lazy: P3): R;
    _invalidateKeyToIndexTable<R = void>(): R;
    _indexOfKey<R = number, P0 = unknown>(__indexOfKey: P0): R;
    description<R = unknown>(): R;
    _pageForIndex<R = number, P0 = number>(__pageForIndex: P0): R;
    _infoForPage<R = unknown, P0 = number>(__infoForPage: P0): R;
    _pageCount<R = number>(): R;
    _isProfileBased<R = boolean>(): R;
    _isPaged<R = boolean>(): R;
    _nameAtIndex<R = unknown, P0 = number>(__nameAtIndex: P0): R;
    _colorAtIndex<R = unknown, P0 = number>(__colorAtIndex: P0): R;
    _count<R = number>(): R;
    _initWithName_fromColorSyncProfileRef<R = unknown, P0 = unknown, P1 = unknown>(__initWithName: P0, _fromColorSyncProfileRef: P1): R;
    editable<R = boolean>(): R;
    name<R = NSString>(): R;
    allKeys<R = NSArray>(): R;
  }
  namespace NSColorList {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSSecureCodingProtocol {
      alloc<R = NSColorList>(): R;
      new: <R = NSColorList>() => R;
      colorListNamed<R = unknown, P0 = unknown>(_colorListNamed: P0): R;
      _findColorListNamed_forDeviceType<R = unknown, P0 = unknown, P1 = unknown>(__findColorListNamed: P0, _forDeviceType: P1): R;
      _colorListNamed_forDeviceType<R = unknown, P0 = unknown, P1 = unknown>(__colorListNamed: P0, _forDeviceType: P1): R;
      availableColorLists<R = unknown>(): R;
      _newWithName_fromPath_forDeviceType<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(__newWithName: P0, _fromPath: P1, _forDeviceType: P2): R;
      initialize<R = void>(): R;
      _loadSystemScreenColorList<R = void>(): R;
    }
  }
}

declare const NSColorList: cocoa.NSColorList.CLASS;
