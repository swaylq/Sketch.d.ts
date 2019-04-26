/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFileWrapper<T0 = void, T1 = void, T2 = void> extends NSObject, NSSecureCodingProtocol {
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    keyForFileWrapper<R = unknown, P0 = unknown>(_keyForFileWrapper: P0): R;
    removeFileWrapper<R = void, P0 = unknown>(_removeFileWrapper: P0): R;
    _removeChild_forUniqueFileName<R = void, P0 = unknown, P1 = unknown>(__removeChild: P0, _forUniqueFileName: P1): R;
    _uniqueFileNameOfChild<R = unknown, P0 = unknown>(__uniqueFileNameOfChild: P0): R;
    addRegularFileWithContents_preferredFilename<R = unknown, P0 = unknown, P1 = unknown>(_addRegularFileWithContents: P0, _preferredFilename: P1): R;
    addFileWrapper<R = unknown, P0 = unknown>(_addFileWrapper: P0): R;
    _resetFileModificationDate<R = void>(): R;
    _addChild_forUniqueFileName<R = unknown, P0 = unknown, P1 = unknown>(__addChild: P0, _forUniqueFileName: P1): R;
    _initDirectoryContents<R = void>(): R;
    _removeParent<R = void, P0 = unknown>(__removeParent: P0): R;
    _addParent<R = void, P0 = unknown>(__addParent: P0): R;
    _newImpl<R = unknown>(): R;
    _initWithImpl_preferredFileName_uniqueFileName_docInfo_iconData<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = unknown>(__initWithImpl: P0, _preferredFileName: P1, _uniqueFileName: P2, _docInfo: P3, _iconData: P4): R;
    writeToURL_options_originalContentsURL_error<R = boolean, P0 = unknown, P1 = number, P2 = unknown, P3 = unknown>(_writeToURL: P0, _options: P1, _originalContentsURL: P2, _error: P3): R;
    _updateDescendantFileNames<R = void>(): R;
    _attributesToWrite<R = unknown>(): R;
    _writeContentsToURL_path_originalContentsURL_tryHardLinking_didHardLinking_error<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown, P3 = boolean, P4 = string, P5 = unknown>(__writeContentsToURL: P0, _path: P1, _originalContentsURL: P2, _tryHardLinking: P3, _didHardLinking: P4, _error: P5): R;
    _forWritingToURL_returnContentsLazyReadingError<R = void, P0 = unknown, P1 = unknown>(__forWritingToURL: P0, _returnContentsLazyReadingError: P1): R;
    readFromURL_options_error<R = boolean, P0 = unknown, P1 = number, P2 = unknown>(_readFromURL: P0, _options: P1, _error: P2): R;
    _readContentsFromURL_path_itemKind_options_error<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown, P3 = number, P4 = unknown>(__readContentsFromURL: P0, _path: P1, _itemKind: P2, _options: P3, _error: P4): R;
    matchesContentsOfURL<R = boolean, P0 = unknown>(_matchesContentsOfURL: P0): R;
    _matchesItemKind_modificationDate<R = boolean, P0 = unknown, P1 = unknown>(__matchesItemKind: P0, _modificationDate: P1): R;
    _setFileType<R = void, P0 = unknown>(__setFileType: P0): R;
    _observePreferredFileNameOfChild<R = void, P0 = unknown>(__observePreferredFileNameOfChild: P0): R;
    dealloc<R = void>(): R;
    initWithSerializedRepresentation<R = unknown, P0 = unknown>(_initWithSerializedRepresentation: P0): R;
    initSymbolicLinkWithDestinationURL<R = unknown, P0 = unknown>(_initSymbolicLinkWithDestinationURL: P0): R;
    initRegularFileWithContents<R = unknown, P0 = unknown>(_initRegularFileWithContents: P0): R;
    initDirectoryWithFileWrappers<R = unknown, P0 = unknown>(_initDirectoryWithFileWrappers: P0): R;
    initWithURL_options_error<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(_initWithURL: P0, _options: P1, _error: P2): R;
    _init<R = unknown>(): R;
    _fullDescription<R = unknown, P0 = boolean>(__fullDescription: P0): R;
    _fileType<R = unknown>(): R;
    _icon<R = unknown>(): R;
    _setIcon<R = void, P0 = unknown>(__setIcon: P0): R;
    _loadIcon<R = void>(): R;
    symbolicLinkDestination<R = unknown>(): R;
    addSymbolicLinkWithDestination_preferredFilename<R = unknown, P0 = unknown, P1 = unknown>(_addSymbolicLinkWithDestination: P0, _preferredFilename: P1): R;
    addFileWithPath<R = unknown, P0 = unknown>(_addFileWithPath: P0): R;
    writeToFile_atomically_updateFilenames<R = boolean, P0 = unknown, P1 = boolean, P2 = boolean>(_writeToFile: P0, _atomically: P1, _updateFilenames: P2): R;
    updateFromPath<R = boolean, P0 = unknown>(_updateFromPath: P0): R;
    needsToBeUpdatedFromPath<R = boolean, P0 = unknown>(_needsToBeUpdatedFromPath: P0): R;
    initSymbolicLinkWithDestination<R = unknown, P0 = unknown>(_initSymbolicLinkWithDestination: P0): R;
    initWithPath<R = unknown, P0 = unknown>(_initWithPath: P0): R;
    symbolicLinkDestinationURL<R = NSURL>(): R;
    regularFileContents<R = NSData>(): R;
    fileWrappers<R = NSDictionary>(): R;
    serializedRepresentation<R = NSData>(): R;
    fileAttributes<R = NSDictionary>(): R;
    setFileAttributes<R = void, P0 = NSDictionary>(_v: P0): R;
    filename<R = NSString>(): R;
    setFilename<R = void, P0 = NSString>(_v: P0): R;
    preferredFilename<R = NSString>(): R;
    setPreferredFilename<R = void, P0 = NSString>(_v: P0): R;
    symbolicLink<R = boolean>(): R;
    regularFile<R = boolean>(): R;
    directory<R = boolean>(): R;
    // + NSFileWrapper(NSExtensions): 
    _iconData<R = unknown>(): R;
    _hasIcon<R = boolean>(): R;
    _initIconWithData<R = void, P0 = unknown>(__initIconWithData: P0): R;
    _initIcon<R = void, P0 = unknown>(__initIcon: P0): R;
    // + NSFileWrapper(NSExtensions):
    icon<R = NSImage>(): R;
    setIcon<R = void, P0 = NSImage>(_v: P0): R;
  }
  namespace NSFileWrapper {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSSecureCodingProtocol {
      alloc<R = NSFileWrapper>(): R;
      new: <R = NSFileWrapper>() => R;
      _newContentsAtURL_path_itemKind_oldChildrenByUniqueFileName_options_error<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = number, P5 = unknown>(__newContentsAtURL: P0, _path: P1, _itemKind: P2, _oldChildrenByUniqueFileName: P3, _options: P4, _error: P5): R;
      _canSafelyMapFilesAtPath<R = boolean, P0 = unknown>(__canSafelyMapFilesAtPath: P0): R;
      _forPath_getItemKind_modificationDate<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown>(__forPath: P0, _getItemKind: P1, _modificationDate: P2): R;
      initialize<R = void>(): R;
      _newFileWrapperWithWriter_uniqueFileName<R = unknown, P0 = unknown, P1 = unknown>(__newFileWrapperWithWriter: P0, _uniqueFileName: P1): R;
      _writeWithWriter_toItemAtPath<R = boolean, P0 = unknown, P1 = unknown>(__writeWithWriter: P0, _toItemAtPath: P1): R;
      attemptOverwrite<R = boolean, P0 = unknown>(_attemptOverwrite: P0): R;
      _newWriterWithData_preferredName<R = unknown, P0 = unknown, P1 = unknown>(__newWriterWithData: P0, _preferredName: P1): R;
      _readWithReader_preferredFileName<R = unknown, P0 = unknown, P1 = unknown>(__readWithReader: P0, _preferredFileName: P1): R;
      _newReaderWithItemAtPath<R = unknown, P0 = unknown>(__newReaderWithItemAtPath: P0): R;
      _removeTemporaryDirectoryAtURL<R = void, P0 = unknown>(__removeTemporaryDirectoryAtURL: P0): R;
      _finishWritingToURL_byTakingContentsFromItemAtURL_addingAttributes_usingTemporaryDirectoryAtURL_backupFileName_error<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = unknown, P5 = unknown>(__finishWritingToURL: P0, _byTakingContentsFromItemAtURL: P1, _addingAttributes: P2, _usingTemporaryDirectoryAtURL: P3, _backupFileName: P4, _error: P5): R;
      _finishWritingToURL_byMovingItemAtURL_addingAttributes_error<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(__finishWritingToURL: P0, _byMovingItemAtURL: P1, _addingAttributes: P2, _error: P3): R;
      _writeAttributes_toURL<R = void, P0 = unknown, P1 = unknown>(__writeAttributes: P0, _toURL: P1): R;
      _temporaryDirectoryURLForWritingToURL_error<R = unknown, P0 = unknown, P1 = unknown>(__temporaryDirectoryURLForWritingToURL: P0, _error: P1): R;
      _pathForURL_reading_error<R = unknown, P0 = unknown, P1 = boolean, P2 = unknown>(__pathForURL: P0, _reading: P1, _error: P2): R;
      _temporaryDirectoryPathForWritingToPath_forResaving_error<R = unknown, P0 = unknown, P1 = boolean, P2 = unknown>(__temporaryDirectoryPathForWritingToPath: P0, _forResaving: P1, _error: P2): R;
  
  }
  }
}

declare const NSFileWrapper: cocoa.NSFileWrapper.CLASS;
