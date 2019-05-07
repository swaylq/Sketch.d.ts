/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPluginManager<T0 = void, T1 = void, T2 = void> extends NSObject, COFlowDelegateProtocol {
    cxx_destruct<R = void>(): R;
    removePluginVersionsNotInIdentifiers<R = void, P0 = unknown>(_removePluginVersionsNotInIdentifiers: P0): R;
    addDownloadAndDecompressPluginError<R = void, P0 = unknown>(_addDownloadAndDecompressPluginError: P0): R;
    compatiblePluginUpdatesNotDownloaded<R = unknown>(): R;
    latestPluginUpdatesNotDownloaded<R = unknown>(): R;
    downloadedPluginURLWithIdentifier_version<R = unknown, P0 = unknown, P1 = unknown>(_downloadedPluginURLWithIdentifier: P0, _version: P1): R;
    firstPluginBundleFoundInFolder<R = unknown, P0 = unknown>(_firstPluginBundleFoundInFolder: P0): R;
    installPluginAtURL_withIdentifier_error<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown>(_installPluginAtURL: P0, _withIdentifier: P1, _error: P2): R;
    resetAllPluginMetadataToBeDisabled<R = void>(): R;
    contentsSameForSmallTextFiles_file2<R = boolean, P0 = unknown, P1 = unknown>(_contentsSameForSmallTextFiles: P0, _file2: P1): R;
    downloadRemotePluginsBlacklist<R = void>(): R;
    isPluginUpdateDownloadedWithIdentifier_version<R = boolean, P0 = unknown, P1 = unknown>(_isPluginUpdateDownloadedWithIdentifier: P0, _version: P1): R;
    installPluginWithIdentifier_version_error<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown>(_installPluginWithIdentifier: P0, _version: P1, _error: P2): R;
    downloadAndInstallPluginWithIdentifier_version_downloadCompletionHandler<R = void, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType>(_downloadAndInstallPluginWithIdentifier: P0, _version: P1, _downloadCompletionHandler: P2): R;
    downloadPluginUpdate_withVersion_completionHandler<R = void, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType>(_downloadPluginUpdate: P0, _withVersion: P1, _completionHandler: P2): R;
    clearPluginsCache<R = void>(): R;
    cancelDownloadingPluginVersions<R = void>(): R;
    downloadLatestPluginUpdatesWithCompletionHandler<R = void, P0 = CDUnknownBlockType>(_downloadLatestPluginUpdatesWithCompletionHandler: P0): R;
    downloadCompatiblePluginUpdatesWithCompletionHandler<R = void, P0 = CDUnknownBlockType>(_downloadCompatiblePluginUpdatesWithCompletionHandler: P0): R;
    downloadPluginUpdates_withCompletionHandler<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_downloadPluginUpdates: P0, _withCompletionHandler: P1): R;
    checkForPluginUpdatesWithHandler_completionHandler<R = void, P0 = CDUnknownBlockType, P1 = CDUnknownBlockType>(_checkForPluginUpdatesWithHandler: P0, _completionHandler: P1): R;
    checkForPluginUpdates_handler_completionHandler<R = void, P0 = unknown, P1 = CDUnknownBlockType, P2 = CDUnknownBlockType>(_checkForPluginUpdates: P0, _handler: P1, _completionHandler: P2): R;
    shouldEnablePluginIdentifier_withVersion<R = boolean, P0 = unknown, P1 = unknown>(_shouldEnablePluginIdentifier: P0, _withVersion: P1): R;
    registerIncompatiblePlugins<R = void>(): R;
    isPluginWithIdentifier_incompatibleWithVersion<R = boolean, P0 = unknown, P1 = unknown>(_isPluginWithIdentifier: P0, _incompatibleWithVersion: P1): R;
    isIncompatiblePlugin<R = boolean, P0 = unknown>(_isIncompatiblePlugin: P0): R;
    versionsForPlugin<R = unknown, P0 = unknown>(_versionsForPlugin: P0): R;
    disabledPlugins<R = unknown>(): R;
    enabledPlugins<R = unknown>(): R;
    disablePlugin<R = void, P0 = unknown>(_disablePlugin: P0): R;
    enablePlugin<R = void, P0 = unknown>(_enablePlugin: P0): R;
    addPluginsToMenu_selector<R = void, P0 = unknown, P1 = string>(_addPluginsToMenu: P0, _selector: P1): R;
    addCommands_toMenu_fromDescription_selector<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = string>(_addCommands: P0, _toMenu: P1, _fromDescription: P2, _selector: P3): R;
    sortMenu_recursively<R = void, P0 = unknown, P1 = boolean>(_sortMenu: P0, _recursively: P1): R;
    runHandlerWithKey_fromCommand_inPlugin_withContext<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_runHandlerWithKey: P0, _fromCommand: P1, _inPlugin: P2, _withContext: P3): R;
    editBundle<R = void, P0 = unknown>(_editBundle: P0): R;
    cleanupFinishedCommands<R = void>(): R;
    trackLongRunningCommand_onComplete<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_trackLongRunningCommand: P0, _onComplete: P1): R;
    stopTrackingLongRunningCommandWithSpecifier<R = unknown, P0 = unknown>(_stopTrackingLongRunningCommandWithSpecifier: P0): R;
    commandWithSpecifier<R = unknown, P0 = unknown>(_commandWithSpecifier: P0): R;
    setupFolderMonitoringWithVisitedURLs<R = void, P0 = unknown>(_setupFolderMonitoringWithVisitedURLs: P0): R;
    clearFolderMonitors<R = void>(): R;
    reloadPlugins<R = void>(): R;
    pluginsFromResolvedFolderAtURL_visitedURLs_relativeFolderPath_ignoredNames<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_pluginsFromResolvedFolderAtURL: P0, _visitedURLs: P1, _relativeFolderPath: P2, _ignoredNames: P3): R;
    pluginsByResolvingFolderAtURL_visitedURLs_relativeFolderPath_ignoredNames<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_pluginsByResolvingFolderAtURL: P0, _visitedURLs: P1, _relativeFolderPath: P2, _ignoredNames: P3): R;
    relativePathByDeletingCommonPathComponentsWithFileURL_fromURL<R = unknown, P0 = unknown, P1 = unknown>(_relativePathByDeletingCommonPathComponentsWithFileURL: P0, _fromURL: P1): R;
    folderNamesToIgnore<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithPluginsFolderURLs_updater_pluginStateManager<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_initWithPluginsFolderURLs: P0, _updater: P1, _pluginStateManager: P2): R;
    incompatiblePluginVersions<R = NSDictionary>(): R;
    setIncompatiblePluginVersions<R = void, P0 = NSDictionary>(_v: P0): R;
    downloadPluginsErrors<R = NSMutableArray>(): R;
    setDownloadPluginsErrors<R = void, P0 = NSMutableArray>(_v: P0): R;
    pluginVersions<R = NSMutableDictionary>(): R;
    setPluginVersions<R = void, P0 = NSMutableDictionary>(_v: P0): R;
    pluginStateManager<R = MSPluginManagingState>(): R;
    monitorForChanges<R = boolean>(): R;
    folderMonitors<R = NSArray>(): R;
    setFolderMonitors<R = void, P0 = NSArray>(_v: P0): R;
    updater<R = MSPluginUpdater>(): R;
    lastTimerInterval<R = number>(): R;
    setLastTimerInterval<R = void, P0 = number>(_v: P0): R;
    sessionTimer<R = NSTimer>(): R;
    setSessionTimer<R = void, P0 = NSTimer>(_v: P0): R;
    runningCommandCallbacks<R = NSMutableDictionary>(): R;
    setRunningCommandCallbacks<R = void, P0 = NSMutableDictionary>(_v: P0): R;
    runningCommands<R = NSMutableDictionary>(): R;
    setRunningCommands<R = void, P0 = NSMutableDictionary>(_v: P0): R;
    metadata<R = NSDictionary>(): R;
    setMetadata<R = void, P0 = NSDictionary>(_v: P0): R;
    metadataURL<R = NSURL>(): R;
    setMetadataURL<R = void, P0 = NSURL>(_v: P0): R;
    logAction<R = MSPluginLogAction>(): R;
    setLogAction<R = void, P0 = MSPluginLogAction>(_v: P0): R;
    disableAllPlugins<R = boolean>(): R;
    setDisableAllPlugins<R = void, P0 = boolean>(_v: P0): R;
    updatesAddedToWarehouse<R = number>(): R;
    setUpdatesAddedToWarehouse<R = void, P0 = number>(_v: P0): R;
    pluginsWithSketchCompatipleUpdates<R = NSArray>(): R;
    setPluginsWithSketchCompatipleUpdates<R = void, P0 = NSArray>(_v: P0): R;
    numberOfIncompatiblePluginsDisabled<R = number>(): R;
    setNumberOfIncompatiblePluginsDisabled<R = void, P0 = number>(_v: P0): R;
    pluginsFolderURLs<R = NSArray>(): R;
    numberOfPluginsWithUpdates<R = number>(): R;
    numberOfPluginsWithSketchCompatibleUpdates<R = number>(): R;
    incompatiblePluginsWithCompatibleUpdates<R = NSDictionary>(): R;
    incompatiblePluginsWithUpdates<R = NSDictionary>(): R;
    incompatiblePlugins<R = NSArray>(): R;
    plugins<R = NSDictionary>(): R;
    setPlugins<R = void, P0 = NSDictionary>(_v: P0): R;
    mainPluginsFolderURL<R = NSURL>(): R;
  }
  namespace MSPluginManager {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, COFlowDelegateProtocol {
      alloc<R = MSPluginManager>(): R;
      new: <R = MSPluginManager>() => R;
      warehousePluginFolderForIdentifier_withVersion<R = unknown, P0 = unknown, P1 = unknown>(_warehousePluginFolderForIdentifier: P0, _withVersion: P1): R;
      pluginsWarehouseURL<R = unknown>(): R;
      pluginsURLs<R = unknown>(): R;
      defaultPluginURL<R = unknown>(): R;
      mainPluginsFolderURL<R = unknown>(): R;
      initialisePlugins<R = void>(): R;
    }
  }
}

declare const MSPluginManager: cocoa.MSPluginManager.CLASS;
