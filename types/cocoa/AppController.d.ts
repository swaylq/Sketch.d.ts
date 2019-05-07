/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface AppController<T0 = void, T1 = void, T2 = void> extends NSObject, NSApplicationDelegateProtocol, NSWindowDelegateProtocol, NSMenuDelegateProtocol, NSUserNotificationCenterDelegateProtocol, MSDataMenuProviderDelegateProtocol, MSDataSupplierManagerDelegateProtocol {
    cxx_destruct<R = void>(): R;
    applyAppearanceToAllWindows<R = void, P0 = unknown>(_applyAppearanceToAllWindows: P0): R;
    toggleDarkMode<R = void, P0 = unknown>(_toggleDarkMode: P0): R;
    waitForResourceMigrationToFinish<R = void>(): R;
    migrateResources<R = void, P0 = unknown>(_migrateResources: P0): R;
    resourcesNeedingMigrationFromResources<R = unknown, P0 = unknown>(_resourcesNeedingMigrationFromResources: P0): R;
    validateMenuItem<R = boolean, P0 = unknown>(_validateMenuItem: P0): R;
    refreshDocumentWindowBadges<R = void>(): R;
    refreshDocuments<R = void>(): R;
    refreshCurrentDocument<R = void>(): R;
    currentDocumentDidChange<R = void>(): R;
    showLicenseAlert_remainingDays<R = void, P0 = number, P1 = number>(_showLicenseAlert: P0, _remainingDays: P1): R;
    updateLicenseManager<R = void>(): R;
    setupLicenseManagerWithPublicCertificate_licenseURL_applicationID<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_setupLicenseManagerWithPublicCertificate: P0, _licenseURL: P1, _applicationID: P2): R;
    startLicenseManager<R = void>(): R;
    buy<R = void, P0 = unknown>(_buy: P0): R;
    openAboutWindow<R = void, P0 = unknown>(_openAboutWindow: P0): R;
    openPreferencesWindowWithPreferencePaneIdentifier<R = void, P0 = unknown>(_openPreferencesWindowWithPreferencePaneIdentifier: P0): R;
    documentWillClose<R = void, P0 = unknown>(_documentWillClose: P0): R;
    dataAction<R = unknown>(): R;
    revealTemplatesFolderInFinder<R = void, P0 = unknown>(_revealTemplatesFolderInFinder: P0): R;
    addTemplatesAtPath_toMenu<R = void, P0 = unknown, P1 = unknown>(_addTemplatesAtPath: P0, _toMenu: P1): R;
    templateLibraryPath<R = unknown>(): R;
    updateTemplateMenu<R = void, P0 = unknown>(_updateTemplateMenu: P0): R;
    openTemplateAtPath<R = void, P0 = unknown>(_openTemplateAtPath: P0): R;
    openTemplateFile<R = void, P0 = unknown>(_openTemplateFile: P0): R;
    checkImageTemplates<R = void>(): R;
    checkDefaults<R = void>(): R;
    periodWithInitialValue_defaultsKey<R = number, P0 = number, P1 = unknown>(_periodWithInitialValue: P0, _defaultsKey: P1): R;
    badgeWindows<R = void>(): R;
    checkForAndDownloadPluginUpdates<R = void>(): R;
    installCompatiblePluginUpdates<R = void>(): R;
    checkForAssetLibraryUpdates<R = void>(): R;
    createActions<R = void>(): R;
    ensureUserTemplateDirectoryExists<R = void>(): R;
    isFirstLaunchOfNewVersion<R = boolean>(): R;
    storePluginList_inCrashLogKey<R = void, P0 = unknown, P1 = unknown>(_storePluginList: P0, _inCrashLogKey: P1): R;
    storePluginsForCrashReport<R = void>(): R;
    setupPluginManager<R = void>(): R;
    reloadAssetLibraryPreferencesTableView<R = void>(): R;
    awakeFromNib<R = void>(): R;
    showMainApplicationWindow<R = void>(): R;
    dealloc<R = void>(): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    removeObserversForVisualSettings<R = void>(): R;
    addObserversForVisualSettings<R = void>(): R;
    openDocumentAtPath_withParameters<R = void, P0 = unknown, P1 = unknown>(_openDocumentAtPath: P0, _withParameters: P1): R;
    openAddLibraryURL_parameters<R = void, P0 = unknown, P1 = unknown>(_openAddLibraryURL: P0, _parameters: P1): R;
    didOpenURL<R = void, P0 = unknown>(_didOpenURL: P0): R;
    handleURLEvent_withReplyEvent<R = void, P0 = unknown, P1 = unknown>(_handleURLEvent: P0, _withReplyEvent: P1): R;
    registerURLScheme<R = void>(): R;
    actionClasses<R = unknown>(): R;
    scriptingMenuAction<R = void, P0 = unknown>(_scriptingMenuAction: P0): R;
    validatePluginMenuItem_documentShowing<R = boolean, P0 = unknown, P1 = boolean>(_validatePluginMenuItem: P0, _documentShowing: P1): R;
    runPluginScript_handler_name_withPreprocess<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = boolean>(_runPluginScript: P0, _handler: P1, _name: P2, _withPreprocess: P3): R;
    runPluginScript_name<R = unknown, P0 = unknown, P1 = unknown>(_runPluginScript: P0, _name: P1): R;
    runPluginCommand_fromMenu_context_onComplete<R = unknown, P0 = unknown, P1 = boolean, P2 = unknown, P3 = CDUnknownBlockType>(_runPluginCommand: P0, _fromMenu: P1, _context: P2, _onComplete: P3): R;
    runPluginCommand_fromMenu_context<R = unknown, P0 = unknown, P1 = boolean, P2 = unknown>(_runPluginCommand: P0, _fromMenu: P1, _context: P2): R;
    targetDocumentForPluginCommand<R = unknown>(): R;
    buildPluginsMenu<R = void, P0 = unknown>(_buildPluginsMenu: P0): R;
    editPlugins<R = void, P0 = unknown>(_editPlugins: P0): R;
    revealPlugin<R = void, P0 = unknown>(_revealPlugin: P0): R;
    rememberLastRun<R = void, P0 = unknown>(_rememberLastRun: P0): R;
    runPluginCommandWithIdentifier_fromBundleAtURL_context_portToAsnwerTo<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_runPluginCommandWithIdentifier: P0, _fromBundleAtURL: P1, _context: P2, _portToAsnwerTo: P3): R;
    runPluginCommandWithIdentifier_fromBundleAtURL_context<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_runPluginCommandWithIdentifier: P0, _fromBundleAtURL: P1, _context: P2): R;
    runPluginAtURL<R = unknown, P0 = unknown>(_runPluginAtURL: P0): R;
    evaluateScript<R = unknown, P0 = unknown>(_evaluateScript: P0): R;
    runPluginCommandWithIdentifier_fromBundleAtURL<R = unknown, P0 = unknown, P1 = unknown>(_runPluginCommandWithIdentifier: P0, _fromBundleAtURL: P1): R;
    runPluginCommand_fromMenu<R = unknown, P0 = unknown, P1 = boolean>(_runPluginCommand: P0, _fromMenu: P1): R;
    lastRunPlugin<R = unknown>(): R;
    setLastRunPlugin<R = void, P0 = unknown>(_v: P0): R;
    fontWatcher<R = MSFontWatcher>(): R;
    setFontWatcher<R = void, P0 = MSFontWatcher>(_v: P0): R;
    componentsPanelController<R = MSComponentsPanelController>(): R;
    setComponentsPanelController<R = void, P0 = MSComponentsPanelController>(_v: P0): R;
    visualSettings<R = NSArray>(): R;
    setVisualSettings<R = void, P0 = NSArray>(_v: P0): R;
    documentationSearcher<R = MSDocumentationSearcher>(): R;
    setDocumentationSearcher<R = void, P0 = MSDocumentationSearcher>(_v: P0): R;
    hud<R = MSHUDWindowController>(): R;
    setHud<R = void, P0 = MSHUDWindowController>(_v: P0): R;
    migrationSemaphore<R = OS_dispatch_semaphore>(): R;
    setMigrationSemaphore<R = void, P0 = OS_dispatch_semaphore>(_v: P0): R;
    scriptPath<R = NSString>(): R;
    setScriptPath<R = void, P0 = NSString>(_v: P0): R;
    canCreateDocuments<R = boolean>(): R;
    setCanCreateDocuments<R = void, P0 = boolean>(_v: P0): R;
    needToInformUserPluginsAreDisabled<R = boolean>(): R;
    setNeedToInformUserPluginsAreDisabled<R = void, P0 = boolean>(_v: P0): R;
    sketchSafeModeOn<R = boolean>(): R;
    setSketchSafeModeOn<R = void, P0 = boolean>(_v: P0): R;
    launchEndTime<R = number>(): R;
    setLaunchEndTime<R = void, P0 = number>(_v: P0): R;
    launchStartTime<R = number>(): R;
    setLaunchStartTime<R = void, P0 = number>(_v: P0): R;
    creationTime<R = number>(): R;
    setCreationTime<R = void, P0 = number>(_v: P0): R;
    librariesController<R = MSAssetLibraryController>(): R;
    actionController<R = MSActionController>(): R;
    updateController<R = MSUpdateController>(): R;
    licenseManager<R = BCLicenseManager>(): R;
    setLicenseManager<R = void, P0 = BCLicenseManager>(_v: P0): R;
    pluginManager<R = MSPluginManagerWithActions>(): R;
    setPluginManager<R = void, P0 = MSPluginManagerWithActions>(_v: P0): R;
    crashLogManager<R = MSCrashLogManager>(): R;
    dataFeedProvider<R = MSDataMenuProvider>(): R;
    mirrorDataProvider<R = MSMirrorDataProvider>(): R;
    setMirrorDataProvider<R = void, P0 = MSMirrorDataProvider>(_v: P0): R;
    mirrorController<R = SMKMirrorController>(): R;
    setMirrorController<R = void, P0 = SMKMirrorController>(_v: P0): R;
    pasteboardManager<R = MSPasteboardManager>(): R;
    setPasteboardManager<R = void, P0 = MSPasteboardManager>(_v: P0): R;
    updateTimer<R = NSTimer>(): R;
    setUpdateTimer<R = void, P0 = NSTimer>(_v: P0): R;
    cloudEnvironmentMenuItem<R = NSMenuItem>(): R;
    setCloudEnvironmentMenuItem<R = void, P0 = NSMenuItem>(_v: P0): R;
    dataFeedMenuItem<R = NSMenuItem>(): R;
    setDataFeedMenuItem<R = void, P0 = NSMenuItem>(_v: P0): R;
    insertSharedTextStyleMenuItem<R = NSMenuItem>(): R;
    setInsertSharedTextStyleMenuItem<R = void, P0 = NSMenuItem>(_v: P0): R;
    insertSymbolMenuItem<R = NSMenuItem>(): R;
    setInsertSymbolMenuItem<R = void, P0 = NSMenuItem>(_v: P0): R;
    debugMenuItem<R = NSMenuItem>(): R;
    setDebugMenuItem<R = void, P0 = NSMenuItem>(_v: P0): R;
    prototypingMenuItem<R = NSMenuItem>(): R;
    setPrototypingMenuItem<R = void, P0 = NSMenuItem>(_v: P0): R;
    printMenu<R = NSMenu>(): R;
    setPrintMenu<R = void, P0 = NSMenu>(_v: P0): R;
    templatesMenu<R = NSMenu>(): R;
    setTemplatesMenu<R = void, P0 = NSMenu>(_v: P0): R;
    pluginsMenuItem<R = NSMenuItem>(): R;
    setPluginsMenuItem<R = void, P0 = NSMenuItem>(_v: P0): R;
    shapesMenu<R = unknown>(): R;
    setShapesMenu<R = void, P0 = unknown>(_v: P0): R;
    checkForLibraryUpdatesPeriod<R = number>(): R;
    checkForUpdatesPeriod<R = number>(): R;
    dataSupplierManager<R = MSDataSupplierManager>(): R;
    canShowWelcomeWindowForUserAction<R = boolean>(): R;
    lastRun<R = MSPluginCommand>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace AppController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSApplicationDelegateProtocol, NSWindowDelegateProtocol, NSMenuDelegateProtocol, NSUserNotificationCenterDelegateProtocol, MSDataMenuProviderDelegateProtocol, MSDataSupplierManagerDelegateProtocol {
      alloc<R = AppController>(): R;
      new: <R = AppController>() => R;
      sharedInstance<R = unknown>(): R;
      initialize<R = void>(): R;
    }
  }
}

declare const AppController: cocoa.AppController.CLASS;
