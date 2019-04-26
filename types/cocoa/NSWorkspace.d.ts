/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWorkspace<T0 = void, T1 = void, T2 = void> extends NSObject {
    automaticallyTerminatedApplications<R = unknown>(): R;
    unterminatedApplications<R = unknown>(): R;
    runningApplications<R = unknown>(): R;
    removeObserver_forKeyPath<R = void, P0 = unknown, P1 = unknown>(_removeObserver: P0, _forKeyPath: P1): R;
    addObserver_forKeyPath_options_context<R = void, P0 = unknown, P1 = unknown, P2 = number, P3 = void>(_addObserver: P0, _forKeyPath: P1, _options: P2, _context: P3): R;
    _getKVOHelperForKeyPath_creating<R = unknown, P0 = unknown, P1 = boolean>(__getKVOHelperForKeyPath: P0, _creating: P1): R;
    _URLForDuplicatingFileAtURL<R = unknown, P0 = unknown>(__URLForDuplicatingFileAtURL: P0): R;
    type_conformsToType<R = boolean, P0 = unknown, P1 = unknown>(_type: P0, _conformsToType: P1): R;
    fileNameExtension_isValidForType<R = boolean, P0 = unknown, P1 = unknown>(_fileNameExtension: P0, _isValidForType: P1): R;
    preferredFileNameExtensionForType<R = unknown, P0 = unknown>(_preferredFileNameExtensionForType: P0): R;
    filenameExtension_isValidForType<R = boolean, P0 = unknown, P1 = unknown>(_filenameExtension: P0, _isValidForType: P1): R;
    preferredFilenameExtensionForType<R = unknown, P0 = unknown>(_preferredFilenameExtensionForType: P0): R;
    localizedDescriptionForType<R = unknown, P0 = unknown>(_localizedDescriptionForType: P0): R;
    typeOfFile_error<R = unknown, P0 = unknown, P1 = unknown>(_typeOfFile: P0, _error: P1): R;
    _copyApplicationDictionaryFromLSDictionary_constructingAppFromCorpse<R = unknown, P0 = __CFDictionary, P1 = boolean>(__copyApplicationDictionaryFromLSDictionary: P0, _constructingAppFromCorpse: P1): R;
    resetProfiling<R = void>(): R;
    writeProfilingDataToPath<R = void, P0 = unknown>(_writeProfilingDataToPath: P0): R;
    stopProfiling<R = void>(): R;
    startProfiling<R = void>(): R;
    unhideApplication<R = void>(): R;
    openFile_operation<R = boolean, P0 = unknown, P1 = number>(_openFile: P0, _operation: P1): R;
    unmountAndEjectDeviceAtURL_error<R = boolean, P0 = unknown, P1 = unknown>(_unmountAndEjectDeviceAtURL: P0, _error: P1): R;
    unmountAndEjectDeviceAtPath<R = boolean, P0 = unknown>(_unmountAndEjectDeviceAtPath: P0): R;
    _volumeIsEjectableForRefNum<R = boolean, P0 = number>(__volumeIsEjectableForRefNum: P0): R;
    checkForRemovableMedia<R = void>(): R;
    mountNewRemovableMedia<R = unknown>(): R;
    mountedRemovableMedia<R = unknown>(): R;
    mountedLocalVolumePaths<R = unknown>(): R;
    getFileSystemInfoForPath_isRemovable_isWritable_isUnmountable_description_type<R = boolean, P0 = unknown, P1 = string, P2 = string, P3 = string, P4 = unknown, P5 = unknown>(_getFileSystemInfoForPath: P0, _isRemovable: P1, _isWritable: P2, _isUnmountable: P3, _description: P4, _type: P5): R;
    _volumeSupportsLongFilenamesAtURL<R = boolean, P0 = unknown>(__volumeSupportsLongFilenamesAtURL: P0): R;
    _volumeSupportsLongFilenamesForRefNum<R = boolean, P0 = number>(__volumeSupportsLongFilenamesForRefNum: P0): R;
    activeApplication<R = unknown>(): R;
    launchedApplications<R = unknown>(): R;
    _postSessionNotificationIfNeeded<R = void>(): R;
    _workspaceSessionIsActive<R = boolean>(): R;
    _applicationStatusChange<R = void, P0 = unknown>(__applicationStatusChange: P0): R;
    hideOtherApplications<R = void>(): R;
    findApplications<R = void>(): R;
    userDefaultsChanged<R = boolean>(): R;
    noteUserDefaultsChanged<R = void>(): R;
    fileSystemChanged<R = boolean>(): R;
    noteFileSystemChanged<R = void, P0 = unknown>(_noteFileSystemChanged: P0): R;
    performFileOperation_source_destination_files_tag<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = number>(_performFileOperation: P0, _source: P1, _destination: P2, _files: P3, _tag: P4): R;
    _fileOperation_source_destination_files<R = boolean, P0 = number, P1 = unknown, P2 = unknown, P3 = unknown>(__fileOperation: P0, _source: P1, _destination: P2, _files: P3): R;
    recycleURLs_completionHandler<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_recycleURLs: P0, _completionHandler: P1): R;
    duplicateURLs_completionHandler<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_duplicateURLs: P0, _completionHandler: P1): R;
    fullPathForApplication<R = unknown, P0 = unknown>(_fullPathForApplication: P0): R;
    _locationsForApplications<R = unknown>(): R;
    _fullPathForService<R = unknown, P0 = unknown>(__fullPathForService: P0): R;
    showSearchResultsForQueryString<R = boolean, P0 = unknown>(_showSearchResultsForQueryString: P0): R;
    activateFileViewerSelectingURLs<R = void, P0 = unknown>(_activateFileViewerSelectingURLs: P0): R;
    selectFile_inFileViewerRootedAtPath<R = boolean, P0 = unknown, P1 = unknown>(_selectFile: P0, _inFileViewerRootedAtPath: P1): R;
    desktopImageOptionsForScreen<R = unknown, P0 = unknown>(_desktopImageOptionsForScreen: P0): R;
    desktopImageURLForScreen<R = unknown, P0 = unknown>(_desktopImageURLForScreen: P0): R;
    setDesktopImageURL_forScreen_options_error<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_setDesktopImageURL: P0, _forScreen: P1, _options: P2, _error: P3): R;
    slideImage_from_to<R = void, P0 = unknown, P1 = CGPoint, P2 = CGPoint>(_slideImage: P0, _from: P1, _to: P2): R;
    extendPowerOffBy<R = number, P0 = number>(_extendPowerOffBy: P0): R;
    isFilePackageAtPath<R = boolean, P0 = unknown>(_isFilePackageAtPath: P0): R;
    getInfoForFile_application_type<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown>(_getInfoForFile: P0, _application: P1, _type: P2): R;
    setIcon_forFile_options<R = boolean, P0 = unknown, P1 = unknown, P2 = number>(_setIcon: P0, _forFile: P1, _options: P2): R;
    _sendFinderAppleEvent_class_file<R = boolean, P0 = number, P1 = number, P2 = unknown>(__sendFinderAppleEvent: P0, _class: P1, _file: P2): R;
    _sendFinderAppleEvent_class_URLs_followSymlinks<R = boolean, P0 = number, P1 = number, P2 = unknown, P3 = boolean>(__sendFinderAppleEvent: P0, _class: P1, _URLs: P2, _followSymlinks: P3): R;
    _iconForURL<R = unknown, P0 = unknown>(__iconForURL: P0): R;
    iconForFile<R = unknown, P0 = unknown>(_iconForFile: P0): R;
    _iconForOSType<R = unknown, P0 = number>(__iconForOSType: P0): R;
    _iconForOSType_creator<R = unknown, P0 = number, P1 = number>(__iconForOSType: P0, _creator: P1): R;
    iconForFileType<R = unknown, P0 = unknown>(_iconForFileType: P0): R;
    launchApplicationAtURL_options_configuration_error<R = unknown, P0 = unknown, P1 = number, P2 = unknown, P3 = unknown>(_launchApplicationAtURL: P0, _options: P1, _configuration: P2, _error: P3): R;
    launchApplication_showIcon_autolaunch<R = boolean, P0 = unknown, P1 = boolean, P2 = boolean>(_launchApplication: P0, _showIcon: P1, _autolaunch: P2): R;
    launchApplication<R = boolean, P0 = unknown>(_launchApplication: P0): R;
    _launchService_andWait<R = boolean, P0 = unknown, P1 = boolean>(__launchService: P0, _andWait: P1): R;
    openFile_fromImage_at_inView<R = boolean, P0 = unknown, P1 = unknown, P2 = CGPoint, P3 = unknown>(_openFile: P0, _fromImage: P1, _at: P2, _inView: P3): R;
    openTempFile<R = boolean, P0 = unknown>(_openTempFile: P0): R;
    openFile_withApplication_andDeactivate<R = boolean, P0 = unknown, P1 = unknown, P2 = boolean>(_openFile: P0, _withApplication: P1, _andDeactivate: P2): R;
    _openFile_withApplication_asService_andWait_andDeactivate<R = boolean, P0 = unknown, P1 = unknown, P2 = boolean, P3 = boolean, P4 = boolean>(__openFile: P0, _withApplication: P1, _asService: P2, _andWait: P3, _andDeactivate: P4): R;
    openURL<R = boolean, P0 = unknown>(_openURL: P0): R;
    dealloc<R = void>(): R;
    _fileOperationCompleted<R = void, P0 = number>(__fileOperationCompleted: P0): R;
    _notificationCenterWithoutTriggeringCreation<R = unknown>(): R;
    iconForFiles<R = unknown, P0 = unknown>(_iconForFiles: P0): R;
    openFile<R = boolean, P0 = unknown>(_openFile: P0): R;
    openFile_withApplication<R = boolean, P0 = unknown, P1 = unknown>(_openFile: P0, _withApplication: P1): R;
    launchAppWithBundleIdentifier_options_additionalEventParamDescriptor_launchIdentifier<R = boolean, P0 = unknown, P1 = number, P2 = unknown, P3 = unknown>(_launchAppWithBundleIdentifier: P0, _options: P1, _additionalEventParamDescriptor: P2, _launchIdentifier: P3): R;
    openURLs_withAppBundleIdentifier_options_additionalEventParamDescriptor_launchIdentifiers<R = boolean, P0 = unknown, P1 = unknown, P2 = number, P3 = unknown, P4 = unknown>(_openURLs: P0, _withAppBundleIdentifier: P1, _options: P2, _additionalEventParamDescriptor: P3, _launchIdentifiers: P4): R;
    _openURLs_withAppPath_options_additionalEventParamDescriptor_launchIdentifiers<R = boolean, P0 = unknown, P1 = unknown, P2 = number, P3 = unknown, P4 = unknown>(__openURLs: P0, _withAppPath: P1, _options: P2, _additionalEventParamDescriptor: P3, _launchIdentifiers: P4): R;
    openURLs_withApplicationAtURL_options_configuration_error<R = unknown, P0 = unknown, P1 = unknown, P2 = number, P3 = unknown, P4 = unknown>(_openURLs: P0, _withApplicationAtURL: P1, _options: P2, _configuration: P3, _error: P4): R;
    openURL_options_configuration_error<R = unknown, P0 = unknown, P1 = number, P2 = unknown, P3 = unknown>(_openURL: P0, _options: P1, _configuration: P2, _error: P3): R;
    _openURLs_withApplicationAtURL_options_configuration_errorHandler<R = unknown, P0 = unknown, P1 = unknown, P2 = number, P3 = unknown, P4 = CDUnknownBlockType>(__openURLs: P0, _withApplicationAtURL: P1, _options: P2, _configuration: P3, _errorHandler: P4): R;
    _launchServicesArchictureStringFromNSBundleExecutableArchitecture<R = __CFString, P0 = number>(__launchServicesArchictureStringFromNSBundleExecutableArchitecture: P0): R;
    absolutePathForAppBundleWithIdentifier<R = unknown, P0 = unknown>(_absolutePathForAppBundleWithIdentifier: P0): R;
    URLForApplicationToOpenURL<R = unknown, P0 = unknown>(_URLForApplicationToOpenURL: P0): R;
    URLForApplicationWithBundleIdentifier<R = unknown, P0 = unknown>(_URLForApplicationWithBundleIdentifier: P0): R;
    _switchControlStatusChanged<R = void>(): R;
    _voiceOverStatusChanged<R = void>(): R;
    _sendFileSystemChangedNotificationForSavePanelInfo<R = void, P0 = unknown>(__sendFileSystemChangedNotificationForSavePanelInfo: P0): R;
    requestAuthorizationOfType_completionHandler<R = void, P0 = number, P1 = CDUnknownBlockType>(_requestAuthorizationOfType: P0, _completionHandler: P1): R;
    menuBarOwningApplication<R = NSRunningApplication>(): R;
    frontmostApplication<R = NSRunningApplication>(): R;
    fileLabels<R = NSArray>(): R;
    fileLabelColors<R = NSArray>(): R;
    _defaultDocumentIcon<R = NSImage>(): R;
    notificationCenter<R = NSNotificationCenter>(): R;
    accessibilityDisplayShouldReduceTransparency<R = boolean>(): R;
    accessibilityDisplayShouldDifferentiateWithoutColor<R = boolean>(): R;
    accessibilityDisplayShouldUseGrayscale<R = boolean>(): R;
    accessibilityDisplayShouldIncreaseContrast<R = boolean>(): R;
    accessibilityDisplayShouldReduceMotion<R = boolean>(): R;
    accessibilityDisplayShouldInvertColors<R = boolean>(): R;
    switchControlEnabled<R = boolean>(): R;
    voiceOverEnabled<R = boolean>(): R;
    // + NSWorkspace(CHWorkspaceAdditions): 
    applicationSupportDirectoryWithSubDirectory_createIfNeeded<R = unknown, P0 = unknown, P1 = boolean>(_applicationSupportDirectoryWithSubDirectory: P0, _createIfNeeded: P1): R;
    applicationSupportDirectory<R = unknown>(): R;
    setApplicationSupportDirectory<R = void, P0 = unknown>(_setApplicationSupportDirectory: P0): R;
    sharedApplicationSupportDirectory<R = unknown>(): R;
    applicationSupportDirectoryName<R = unknown>(): R;
  }
  namespace NSWorkspace {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSWorkspace>(): R;
      new: <R = NSWorkspace>() => R;
      sharedWorkspace<R = unknown>(): R;
      _invalidateAccessibilityDisplayValues<R = void>(): R;
  
  }
  }
}

declare const NSWorkspace: cocoa.NSWorkspace.CLASS;
