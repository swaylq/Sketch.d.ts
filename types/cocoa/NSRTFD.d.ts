/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRTFD<T0 = void, T1 = void, T2 = void> extends NSMutableDictionary {
    validatePath_ignore<R = number, P0 = unknown, P1 = unknown>(_validatePath: P0, _ignore: P1): R;
    addData_name<R = unknown, P0 = unknown, P1 = unknown>(_addData: P0, _name: P1): R;
    copy<R = unknown>(): R;
    copyWithZone<R = unknown, P0 = _NSZone>(_copyWithZone: P0): R;
    copy_into<R = unknown, P0 = unknown, P1 = unknown>(_copy: P0, _into: P1): R;
    removeFile<R = unknown, P0 = unknown>(_removeFile: P0): R;
    dataForFile<R = unknown, P0 = unknown>(_dataForFile: P0): R;
    addLink<R = unknown, P0 = unknown>(_addLink: P0): R;
    addFile<R = unknown, P0 = unknown>(_addFile: P0): R;
    _getDocInfoForKey<R = unknown, P0 = unknown>(__getDocInfoForKey: P0): R;
    addCommon_docInfo_value_zone<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = _NSZone>(_addCommon: P0, _docInfo: P1, _value: P2, _zone: P3): R;
    replaceFile_path<R = unknown, P0 = unknown, P1 = unknown>(_replaceFile: P0, _path: P1): R;
    replaceFile_data<R = unknown, P0 = unknown, P1 = unknown>(_replaceFile: P0, _data: P1): R;
    getDocument_docInfo<R = unknown, P0 = unknown, P1 = unknown>(_getDocument: P0, _docInfo: P1): R;
    uniqueKey<R = unknown, P0 = unknown>(_uniqueKey: P0): R;
    createUniqueKey<R = unknown, P0 = unknown>(_createUniqueKey: P0): R;
    createRandomKey<R = unknown, P0 = unknown>(_createRandomKey: P0): R;
    initWithDataRepresentation<R = unknown, P0 = unknown>(_initWithDataRepresentation: P0): R;
    dataRepresentation<R = unknown>(): R;
    saveToDocument_removeBackup_errorHandler<R = number, P0 = unknown, P1 = boolean, P2 = unknown>(_saveToDocument: P0, _removeBackup: P1, _errorHandler: P2): R;
    internalSaveTo_removeBackup_errorHandler<R = number, P0 = unknown, P1 = boolean, P2 = unknown>(_internalSaveTo: P0, _removeBackup: P1, _errorHandler: P2): R;
    tmpNameFromPath<R = unknown, P0 = unknown>(_tmpNameFromPath: P0): R;
    tmpNameFromPath_extension<R = unknown, P0 = unknown, P1 = unknown>(_tmpNameFromPath: P0, _extension: P1): R;
    nameFromPath_extra<R = unknown, P0 = unknown, P1 = unknown>(_nameFromPath: P0, _extra: P1): R;
    internalSaveTo_removeBackup_errorHandler_temp_backup<R = number, P0 = unknown, P1 = boolean, P2 = unknown, P3 = unknown, P4 = unknown>(_internalSaveTo: P0, _removeBackup: P1, _errorHandler: P2, _temp: P3, _backup: P4): R;
    internalWritePath_errorHandler_remapContents_hardLinkPath<R = number, P0 = unknown, P1 = unknown, P2 = boolean, P3 = unknown>(_internalWritePath: P0, _errorHandler: P1, _remapContents: P2, _hardLinkPath: P3): R;
    writePath_docInfo_errorHandler_remapContents_hardLinkPath<R = number, P0 = unknown, P1 = unknown, P2 = unknown, P3 = boolean, P4 = unknown>(_writePath: P0, _docInfo: P1, _errorHandler: P2, _remapContents: P3, _hardLinkPath: P4): R;
    writePath_docInfo_errorHandler_remapContents_markBusy_hardLinkPath<R = number, P0 = unknown, P1 = unknown, P2 = unknown, P3 = boolean, P4 = boolean, P5 = unknown>(_writePath: P0, _docInfo: P1, _errorHandler: P2, _remapContents: P3, _markBusy: P4, _hardLinkPath: P5): R;
    initFromDocument<R = number, P0 = unknown>(_initFromDocument: P0): R;
    initUnixFile<R = number, P0 = unknown>(_initUnixFile: P0): R;
    setPackage<R = unknown, P0 = boolean>(_setPackage: P0): R;
    isPackage<R = boolean>(): R;
    removeObjectForKey<R = void, P0 = unknown>(_removeObjectForKey: P0): R;
    setObject_forKey<R = void, P0 = unknown, P1 = unknown>(_setObject: P0, _forKey: P1): R;
    keyEnumerator<R = unknown>(): R;
    objectForKey<R = unknown, P0 = unknown>(_objectForKey: P0): R;
    count<R = number>(): R;
    dealloc<R = void>(): R;
    initWithCapacity<R = unknown, P0 = number>(_initWithCapacity: P0): R;
    initWithContentsOfFile<R = unknown, P0 = unknown>(_initWithContentsOfFile: P0): R;
    initWithDictionary<R = unknown, P0 = unknown>(_initWithDictionary: P0): R;
    initWithDictionary_copyItems<R = unknown, P0 = unknown, P1 = boolean>(_initWithDictionary: P0, _copyItems: P1): R;
    initWithObjects_forKeys_count<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(_initWithObjects: P0, _forKeys: P1, _count: P2): R;
    init<R = unknown>(): R;
    initFromElement_ofDocument<R = unknown, P0 = unknown, P1 = unknown>(_initFromElement: P0, _ofDocument: P1): R;
    addDirNamed_lazy<R = number, P0 = unknown, P1 = boolean>(_addDirNamed: P0, _lazy: P1): R;
    realAddDirNamed<R = number, P0 = unknown>(_realAddDirNamed: P0): R;
    insertItem_path_dirInfo_zone_plist<R = number, P0 = unknown, P1 = unknown, P2 = unknown, P3 = _NSZone, P4 = unknown>(_insertItem: P0, _path: P1, _dirInfo: P2, _zone: P3, _plist: P4): R;
    addFileNamed_fileAttributes<R = number, P0 = unknown, P1 = unknown>(_addFileNamed: P0, _fileAttributes: P1): R;
    getDirInfo<R = unknown, P0 = boolean>(_getDirInfo: P0): R;
    initWithPasteboardDataRepresentation<R = unknown, P0 = unknown>(_initWithPasteboardDataRepresentation: P0): R;
    pasteboardDataRepresentation<R = unknown>(): R;
    initFromSerialized<R = unknown, P0 = unknown>(_initFromSerialized: P0): R;
    freeSerialized_length<R = unknown, P0 = void, P1 = number>(_freeSerialized: P0, _length: P1): R;
    serialize_length<R = unknown, P0 = void, P1 = number>(_serialize: P0, _length: P1): R;
    _isLink<R = boolean, P0 = unknown>(__isLink: P0): R;
  }
  namespace NSRTFD {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSMutableDictionary {
      initialize<R = void>(): R;
    }
  }
}

declare const NSRTFD: cocoa.NSRTFD.CLASS;
