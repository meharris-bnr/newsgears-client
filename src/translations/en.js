const en = {
  // generic
  trueStr: "true",
  falseStr: "false",
  somethingHorribleHappened:
    "Something horrible happened, and we're not sure what!  Please try again in a few moments.",
  requestTimedOut: "Request timed out, please try again in a few moments.",
  privacyPolicy: "Privacy Policy",
  cancel: "Cancel",
  filter: "Filter",
  first: "First",
  previous: "Previous",
  next: "Next",
  last: "Last",
  username: "Username",
  password: "Password",
  submit: "Submit",
  subscribe: "Subscribe",
  subscribed: "Subscribed!",
  inDevelopment:
    "Sorry, this section of FeedGears isn't quite ready yet.  Check back in a few days!",
  loadingProgress: 'loadingProgress',
  // auth
  loginToFeedGears: "Login to FeedGears",
  accountRecovery: "Account Recovery",
  passwordReset: "Password Reset",
  accountRegistration: "Account Registration",
  alreadyHaveAnAccount: "Already have an accont? Login here.",
  accountRecoveryHere: "Need help signing in?",
  registerHere: "FeedGears is free.  Create an account here.",
  unableToCompleteYourRequest:
    "We weren't able to complete your request.  Please try to login using another method.",
  usernameAndPasswordAreRequired: "Username and password are required.",
  passwordIsRequired: "Password is required.",
  usernameIsRequired: "Username is required.",
  signinWithGoogle: "Sign in with Google",
  pwResetRequestMessage:
    "Enter your username and email address.  We'll send a password reset link to your verified email address.",
  checkEmailForFurther: "Check your email to further instructions.",
  newPassword: "New password",
  confirmNewPassword: "Confirm new password",
  enterAndConfirmNewPw: "Enter and confirm your new password.",
  pwUpdated: "Password updated.",
  registrationRequirements:
    "Username, email address, and password are required in order to register.",
  // landing
  createAnAccount: "Create an account",
  whatIsFeedGears: "A modern, customizable, feed reader.",
  whyIsFeedGearsFree: "Free forever because we love RSS.",
  devBlog: "Dev Blog",
  docs: "Docs",
  api: "API",
  email: "Email",
  twitter: "Twitter",
  github: "Github",
  twitch: "Twitch",
  discord: "Discord",
  copyright: "COPYRIGHT",
  contactUsWithQuestionsViaEmail:
    "Contact Lost Sidewalk Software with questions via email.",
  // demo 
  filterScreenshot: 'Queue filter screenshot',
  listLayoutsScreenshot: 'List layout screenshot',
  cardLayoutsScreenshot: 'Card layout screenshot',
  tableLayoutsScreenshot: 'Table layout screenshot',
  opmlUploadScreenshot: 'OPML upload screenshot',
  comingSoon: 'Coming soon!',
  // demo (api access) 
  apiAccess: 'API Access', 
  // demo (enhanced filtering) 
  enhancedFiltering: 'Enhanced Filtering and Searching Using LunrJS',
  enhancedFiltering_detail1: 'Apply filters and search within an article queue to focus your reading options based on your preferences or specific topics of interest.',
  enhancedFiltering_detail2: 'Easily locate articles using a variety of data points, saving time and streamlining your reading experience.  FeedGears search capabilities are backed by lunrjs.',
  // demo (feed dashboard)
  feedDashboard: 'Feed Dashboard', 
  feedDashboard_detail1: 'The feed dashboard shows summary information about each article queue.  Each dashboard card is configurable; you can add and remove details and action buttons according to your needs.',
  feedDashboard_detail2: 'By default, FeedGears shows the number of unread items, number of \'starred\' items, and the most recently published or updated article across all subscriptions in a queue.  The dashboard card also gives quick access to manage subscriptions, and get at-a-glance details about each feed in a queue: ',
  dashboardCardScreenshot: 'Queue dashboard card screenshot',
  queueSettingsScreenshot: 'Queue settings screenshot',
  // demo (layout options)
  layoutOptions: 'Layouts and Themes',
  layoutOptions_detail1: 'Choose from three reading layouts: tabular, list, or card views. The list view offers a streamlined presentation, allowing you to scroll through articles. The card view displays featured images and snippets for a more engaging reading experience. The tabular view provides a structured format, useful for a quick overview of headlines.',
  layoutOptions_detail2: 'Light and dark themes are available to reduce eye strain in low-light environments.',
  // demo (misc) 
  aboutFeedGears: 'About FeedGears', 
  accessible: 'Accessible', 
  accessible_detail1: 'Accessibility is a top priority. We are committed to ensuring an inclusive experience for all users of FeedGears. To achieve this, we utilize vue-announcer, a tool that makes important messages accessible to screen readers and other assistive technologies. By leveraging vue-announcer, we ensure that everyone can access the information they need seamlessly.',
  accessible_detail2: 'Moreover, we strive to meet the Web Content Accessibility Guidelines (WCAG) compliance standards. WCAG provides a set of guidelines to make digital content more accessible to people with disabilities. By adhering to these guidelines, we ensure that FeedGears is designed and developed with accessibility in mind, providing an optimal experience for all users.',
  mobileOptimized: 'Mobile Optimized',
  mobileOptimized_detail1: 'FeedGears has a mobile-optimized and responsive interface, designed with practicality in mind. Our UI ensures a smooth and consistent experience across different devices, including smartphones and tablets.',
  mobileOptimized_detail2: 'The responsive design principles of Vuetify allow our interface to adapt seamlessly to various screen sizes. Whether you\'re using a smaller mobile device or a larger tablet, the functionality and visual presentation remain consistent. This means you can enjoy the same features and user-friendly interface, regardless of the device you choose to use.',
  mobileOptimized_detail3: 'We\'ve carefully designed our interface to be intuitive and efficient on mobile devices. Navigating through articles, exploring categories, and customizing your reading preferences is easy and convenient. The layout and controls are optimized for touch interaction, ensuring a seamless experience on your mobile device.',
  secure: 'Secure',
  secure_detail1: 'One of our key privacy features is the secure image proxy. With this feature, all images within the RSS feeds are routed through our secure server before being displayed. This helps prevent any potential privacy risks associated with loading external images directly. By proxying the images, we can analyze and sanitize them, reducing the likelihood of malicious or unwanted content reaching your device.',
  secure_detail2: 'Additionally, we implement a sensible Content Security Policy (CSP) to safeguard against cross-site scripting (XSS) attacks and other potential security vulnerabilities. The CSP allows us to define trusted sources for various types of content. By enforcing these policies, we mitigate the risks associated with unauthorized code execution and unauthorized data access.',
  secure_detail3: 'Your privacy and security are of utmost importance to us. By utilizing a secure image proxy and implementing a sensible Content Security Policy, we aim to provide you with a worry-free browsing experience. Enjoy peace of mind as you explore your RSS feeds, knowing that we have taken proactive steps to protect your privacy and ensure the integrity of your data.',
  localized: 'Localized',
  localized_detail1: 'FeedGears is presently available in English and Spanish.  Adding support for additional languages is our on short-term roadmap.',
  freeAsInBeer: 'Free As In Beer',
  freeAsInBeer_detail1: 'Lost Sidewalk Software embraces the principles of free and open source software (FOSS) for all of our products. All our source code is freely available on GitHub and covered by the GNU General Public License version 3 (GPLv3). This means that anyone can access, study, modify, and distribute our software.',
  freeAsInBeer_detail2: 'We welcome developers and enthusiasts to join our community and contribute to the project. Whether it\'s through code contributions, bug fixes, feature suggestions, or documentation improvements, we value and appreciate all forms of involvement. Together, we can make the FeedGears platform even better and meet the evolving needs of our users.',
  freeAsInBeer_detail3: 'In the spirit of FOSS, we believe in the freedom to use, examine, modify, and redistribute software. Our goal is to foster collaboration, knowledge sharing, and innovation. We invite you to join our journey, where we aim to build an active and supportive community of developers, contributors, and users. Your contributions, regardless of their size, are highly valued and instrumental in shaping the future of FeedGears. Let\'s celebrate the power of FOSS and work together to create a better and more inclusive experience for all.',
  selfHostable: 'Self-Hostable / Pre-Built Containers',
  selfHostable_detail1: 'You can run FeedGears in your preferred environment. Our pre-built containers and compatible with various OCI-compliant runtimes such as Docker and Podman. This gives you the freedom to deploy and manage FeedGears according to your specific requirements.',
  selfHostable_detail2: 'Self-hosting allows you to keep your data within your own environment, offering you full control over the entire RSS aggration process. You decide to run it on your local machine, private server, or within your containerized infrastructure.',
  // demo (opml) 
  opmlSupport: 'OPML Support',
  opmlSupport_detail1: 'FeedGears supports OPML import/export, making it easy to migrate your RSS subscriptions. Import feeds from OPML files produced by other readers, and consolidate multiple sources. Export your feeds, queue structures, and metadata as OPML files for backups or sharing with others.', 
  opmlSupport_detail2: 'OPML ensures compatibility and interoperability with other RSS readers.',
  // demo (reading experience)
  readingExperience: 'Streamlined Reading Experience', 
  readingExperience_detail1: 'The FeedGears article view integrates a robust media player, allowing you to conveniently view media content directly within the application.',
  readingExperience_detail2: 'Share articles effortlessly through popular platforms like Twitter, LinkedIn, Facebook, Telegram, and Blogger.',
  readingExperience_detail3: 'Filter articles by their RSS categories for quick navigation.',
  textArticleScreenshot: 'Text/HTML Article',
  podcastAudioScreenshot: 'Podcast Audio',
  youtubeVideoScreenshot: 'Youtube Video',
  imageArticleScreenshot: 'Article with Images',
  // demo (simplified organization)
  simplifiedOrganization: 'Simplified Organization',
  simplifiedOrganization_detail1: 'With FeedGears article queue system, you can easily organize your RSS feed subscriptions into topical groups. You can create queues for different topics of interest, such as gaming, technology, or sports, allowing you to stay focused and access articles from multiple sources in one place.',
  simplifiedOrganization_detail2: 'By importing articles from all the feeds in a queue, FeedGears creates a unified collection of articles. This means you don\'t have to navigate through multiple individual feeds or switch between different sources manually. You can enjoy a seamless reading experience with all relevant articles conveniently accessible in a single queue.',
  // faq
  whatIsRSS: "What is RSS/ATOM?",
  rssIs:
    "RSS (Really Simple Syndication) is a web feed format used for publishing frequently updated content such as blog entries, news headlines, audio, and video. It was first introduced by Netscape in 1999 as an XML-based format for syndicating content from news sites and blogs.",
  rssAllows:
    "RSS allows users to subscribe to content feeds using a web feed reader or aggregator, which can automatically retrieve and display new content from multiple sources in a single location. This makes it easier for users to stay up-to-date on their favorite websites and content creators without having to manually check each site for updates.",
  feedGearsIs: "FeedGears is both an RSS aggregator and an RSS reader.",
  overTheYears:
    "Over the years, RSS has evolved and several versions of the protocol have been released, including: ",
  eachVersionAdded:
    "Each version added new features and functionality, such as support for multimedia content and enclosures.",
  atomOTOH:
    "Atom, on the other hand, is a similar web feed format that was introduced in 2003 as an alternative to RSS. Like RSS, Atom is an XML-based format that allows publishers to syndicate content such as blog posts, news articles, and podcasts.",
  keyDifferences:
    "One of the key differences between RSS and Atom is that Atom is a standardized format, while RSS has multiple versions and variations. Additionally, Atom is designed to be more extensible and flexible than RSS, allowing for easier customization and support for additional metadata.",
  overallRoles:
    "Overall, RSS and Atom have played an important role in the evolution of web content syndication and have helped to make it easier for users to access and consume the content they care about.",
  listOfLinksToRSSSpecs: 'List of links to RSS specifications',
  listOfLinksOfInterest: 'List of useful and/or interesting links about RSS',
  // video panel
  rssMadeEasy: "RSS Made Easy",
  // confirmation dialog
  pleaseConfirm: "Please confirm",
  confirm: "Confirm",
  // go back
  goBack: "Go back",
  // control panel 
  login: "Login",
  logout: "Logout",
  settings: "Settings",
  help: "Help",
  switchMode: "Switch display mode",
  createNewQueue: "New queue",
  uploadOPML: "Upload OPML",
  pleaseEnableNotifications: "Please enable notifications to receive messages from FeedGears.",
  // buttons
  update: "Update",
  save: "Save",
  // queue config panel
  queueProperties: "Queue Properties",
  rssFeedDiscovery: "RSS Feed Discovery",
  configuringQueue: "Configuring queue: {name}",
  // queue properties
  createANewQueue: "Create a new queue",
  createANewQueueHere: "Create a new queue here.  Queues are used to group and organize articles from related feed subscriptions.  Articles in the same queue are read, indexed, and filtered together.  Similarly, articles in the same queue that are 'starred' are published to a new queue-specific feed, which is available in multiple formats.  Use this panel to create a new queue, define its basic properties, and configure settings related to publishing starred articles.  Once a queue is created, you can add subscriptions to import articles.",
  updateQueueSettings: "UPDATE QUEUE SETTINGS",
  updateQueueSettingsHere: "Update queue settings here.  Queues are used to group and organize articles from related feed subscriptions.  Articles in the same queue are read, indexed, and filtered together.  Similarly, articles in the same queue that are 'starred' are published to a new queue-specific feed, which is available in multiple formats.  Use this panel to change basic queue properties, and configure settings related to publishing starred articles.",
  queueIdentifier: "Queue identifier",
  queueIdentifierHint: "A short, unique name for this queue. This value will be generated if not provided. This value will appear in log messages and elsewhere to refer to this queue.",
  queueTitle: "Queue title",
  queueTitleHint: "An optional descriptive name for this queue.  This value is shown throughout the FeedGears UI to refer to this queue.",
  queueDescription: "Queue description",
  queueDescriptionHint: "An optional detailed description for this queue, shown on the queue dashboard.",
  queueFeedGenerator: "Generator",
  queueFeedGeneratorHint: "In the published artifacts for this queue, this value appears as the 'feed generator' value",
  queueFeedCopyright: "Copyright",
  queueFeedCopyrightHint: "In the published artifacts for this queue, this value appears as the 'feed copyright' value",
  queueFeedLanguage: "Language",
  queueFeedLanguageHint: "In the published artifacts for this queue, this value appears as the 'feed language' value.",
  // subscription config
  yourSubscriptions: "YOUR SUBSCRIPTIONS",
  manageYourSubscriptionsHere: "Manage your subscriptions here.  View the entire history of our interaction with this by viewing RSS Feed Metrics.  You can also use this panel to configure authentication, and unsubscribe from a feed.  Please note that articles are purged as needed, regardless of subscription status.  You may still see articles in your queue even after you unsubscribe from a feed here.",
  addANewSubscription: "ADD A NEW SUBSCRIPTION",
  addANewSubscriptionHere: "Add a new subscription here.  Enter a valid URL.  We will attempt to resolve the location of the RSS/ATOM artifact at the location you specify.",
  feedUrl: "Feed URL",
  credentialsUseMessage:
    "* The following credentials will be supplied if this feed requests authentication.",
  discovery: "Discovery",
  auth: "Auth",
  unsubscribe: "Unsubscribe",
  subscriptionAdded: "Subscription added",
  subscriptionUpdated: "Subscription updated",
  subscriptionDeleted: "Subscription deleted",
  subscriptionMetrics: "RSS feed metrics",
  importedPersistedAndArchived: "Imported {importCt} articles.  Saved {persistCt} articles.  Archived {archiveCt} articles due to age.",
  importedAndPersisted: "Imported {importCt} articles.  Saved {persistCt} articles.",
  importedAndArchived: "Imported {importCt} articles.  Archived {archiveCt} articles due to age.",
  importedNArticles: "Imported {n} articles (nothing new).",
  timestamp: "Timestamp",
  message: "Message",
  httpStatusLabel: "HTTP Status",
  httpRedirect: "HTTP Redirect Status",
  error: "Error",
  updateAuth: "Update Credentials",
  lastImportedAt: "Last imported at: {timestamp}",
  // rss feed info
  authorColon: "Author:",
  lastPublishedColon: "Last published:",
  managingEditorColon: "Managing editor:",
  webmasterColon: "Webmaster:",
  httpStatusCode: "HTTP status code",
  redirectHttpStatusCode: "Redirect HTTP status code",
  feedAlsoAvailableInHttps: "This feed is also available in HTTPS.",
  recommendedFeeds: "Similar feeds",
  // post feed filter help
  filtering: "Filtering",
  filteringProvides:
    "Filtering provides a powerful way to find specific articles based on various fields such as feed, categories, description, title, author, published date, updated date, contents, and URL.",
  syntax: "Syntax",
  feedGearsFilterSupports:
    "The FeedGears filter function supports a syntax that allows users to build complex search queries. The basic syntax is as follows:",
  fieldColonValue: "field:value",
  syntaxAllows:
    "This syntax allows you to specify a field name followed by a colon and the corresponding value you want to search for. You can use multiple field:value pairs to create more specific search queries.",
  supportedFields: "Supported Fields",
  feedFieldDesc: "The name or identifier of the feed.",
  categoryFieldDesc:
    "The categories or tags associated with the article.",
  descriptionFieldDesc:
    "A summary or description of the article.",
  titleFieldDesc: "The title of the article.",
  authorFieldDesc: "The primary author of the article.",
  authorsFieldDesc:
    "A list of authors associated with the article.",
  contributorsFieldDesc:
    "A list of contributors to the article.",
  publishedFieldDesc: "The published date of the article.",
  updatedFieldDesc: "The updated date of the article.",
  contentsFieldDesc: "The main content of the article.",
  urlFieldDesc: "The URL of the article.",
  statusFieldDesc: "The read-status of the article (read, unread, read-later).", 
  starredFieldDesc: "The starred-status of the article (true, false).",
  exampleQueries: "Example Queries",
  hereAreSomeExamples:
    "Here are some examples of search queries you can perform using the FeedGears filter function:",
  explanation: "Explanation",
  searchForArticlesWithWord:
    'Search for articles with the word "technology" in the title.',
  searchForArticlesPublishedBy:
    "Search for articles published by a specific author.",
  searchForArticlesPublishedBetween:
    "Search for articles published between two specific dates.",
  searchForArticlesWithWords:
    'Search for articles with the word "JavaScript" in the contents and "tutorial" in the title.',
  searchForArticlesInASpecificFeedAndCategory:
    "Search for articles in a specific feed and category.",
  advancedQueries: "Advanced Queries",
  inAdditionTo:
    "In addition to the basic field:value queries, FeedGears supports more advanced search options such as wildcard searches, fuzzy searches, and range searches. You can refer to the FeedGears documentation for more details on these advanced search options.",
  // help panel
  feedGearsHelp: "FeedGears Help",
  dismiss: "Dismiss",
  globalShortcutKeys: "GLOBAL SHORTCUT KEYS",
  key: "Key",
  action: "Action",
  configureSelectedQueue: "Configure the selected queue",
  markSelectedQueueAsRead: "Mark the selected queue as read",
  deleteSelectedQueue: "Delete the selected queue",
  addSubscriptionToSelectedQueue: "Add a subscription to selected queue",
  showUnread: "Show unread",
  showStarred: "Show starred",
  showReadLater: "Show read-later",
  showRead: "Show read",
  search: "Search",
  // layout
  cardLayout: "Switch to card layout",
  listLayout: "Switch to list layout",
  tableLayout: "Switch to table layout",
  refreshQueues: "Refresh queues",
  refreshForLatest: "Refresh this queue for new articles",
  markQueueAsRead: "Mark this queue as read",
  toggleSortOrder: "Toggle sort direction",
  toggleFilterPills: "Toggle filter pills",
  allSubscriptions: "all subscriptions",
  all: "all",
  unread: "UNREAD",
  readLater: "READ-LATER",
  read: "READ",
  starred: "STARRED",
  clear: "CLEAR",
  toggleUnread: 'toggleUnread',
  toggleRead: 'toggleRead',
  toggleReadLater: 'toggleReadLater',
  toggleStarred: 'toggleStarred',
  // iTunes
  iTunesTitle: "TITLE: {title}",
  iTunesSubTitle: "SUBTITLE: {subTitle}",
  iTunesAuthor: "AUTHOR: {author}",
  iTunesEpisode: "EPISODE: {episode}",
  iTunesEpisodeType: "EPISODE TYPE: {episodeType}",
  iTunesDuration: "DURATION: {duration}",
  explicit: "EXPLICIT",
  closedCaptioned: "Closed Captioned",
  episode: "Episode {episode}",
  episodeType: "{episodeType} episode",
  // post media
  media: "MEDIA",
  // community
  nViews: "VIEWS",
  tags: "TAGS",
  // post media content
  audioChannelsColon: "AUDIO CHANNELS:",
  bitRateColon: "BIT RATE:",
  durationColon: "DURATION:",
  expressionColon: "EXPRESSION:",
  fileSizeColon: "FILE SIZE:",
  frameRateColon: "FRAME RATE:",
  heightColon: "HEIGHT:",
  widthColon: "WIDTH:",
  languageColon: "LANGUAGE:",
  samplingRateColon: "SAMPLING RATE:",
  // opml
  uploadOpmlHere: 'Use this screen to upload an OPML file containing information about your feed subscriptions from another platform.',
  createQueuesFromOPML: "Upload OPML to create queues",
  selectAnOpmlFile: "Select an OPML file",
  addAnOpmlFile: "Add an OPML file",
  addOneOrMoreFilesToUpload: "Add one or more files to upload",
  finalizeUpload: "Finalize upload",
  continueToStep2: "Continue to step 2",
  clickHereWHenYourFilesAreStaged: "Click here when your files are staged",
  opmlFiles: "OPML Files",
  previewThisFile: "Preview this file in a new window.",
  delete: "Delete",
  selectAtLeastOneFile: "Select at least one file to continue.",
  opmlFilesContainErrors:
    "Your files contain the following problems.  Please resolve these issues and re-attempt your upload.",
  weWillCreateTheFollowingSubscriptions:
    "We will create the following queues from your OPML file(s):",
  // post feed
  toggleDashboard: 'Show/hide dashboard',
  thisIsYourQueueDashboard: "This is your queue dashboard.  The dashboard shows summary statistics about each queue, such as the number of unread items across a group of subscriptions.  Click on a queue card to view articles in that queue.  Use the queue card buttons add, manage, subscribe, and unsubscribe to feeds.  Press ESC to hide this menu.",
  // queue select button
  showMoreInfo: "Show details",
  hideMoreInfo: "Hide details",
  addSubscriptions: "Add subscriptions",
  manageSubscriptions: "Manage subscriptions ({ct})",
  subscriptions: "SUBSCRIPTIONS",
  publications: "PUBLICATIONS",
  recentArticles: "RECENT ARTICLES",
  zeroSubscriptions: "0 subscriptions",
  importerRanAt: "Importer ran at {importTimestamp}",
  nNewArticlesSaved: "{n} new articles saved",
  nArticlesArchived: "{n} articles archived",
  httpStatus: "HTTP {httpStatusCode} ({httpStatusMessage})",
  redirectedTo:
    "Redirected to {redirectFeedUrl} HTTP {redirectHttpStatusCode} ({redirectHttpStatusMessage})",
  metricsNotYetAvailable: "Metrics are not yet available for this feed.",
  confirmDeleteQueue:
    "Please confirm that you want to delete this queue. This action is irreversible.",
  confirmMarkQueueAsRead:
    "Please confirm that you want to mark all items in this queue as read.",
  queueDashboard: "FEED DASHBOARD",
  queueSettings: "QUEUE SETTINGS",
  opmlUpload: "OPML UPLOAD",
  refreshFailedDueTo: "Refresh failed due to",
  noMessage: "no message",
  queueUpdated:
    "Queue updated.  We're sorting out your subscriptions in the background.  This process may take several minutes.",
  queueCreated:
    "Queue created.  We're sorting out your new subscriptions in the background.  This process may take several minutes.",
  nQueuesCreated:
    " queues created.  We're sorting out your new subscriptions in the background.  This process may take several minutes.",
  noArticlesInThisQueue: "There's nothing here!  Adjust your filter, add more subscriptions, or wait for more articles to be imported.",
  unreadCount: '{n} unread articles',
  readCount: '{n} read articles',
  publishedCount: '{n} published articles',
  totalCount: '{n} articles',
  nTotalArticlesInQueue: '{n} Total articles in this queue',
  queueCardView: 'Queue card view',
  subscriptionListView: 'Subscription list view',
  // post item
  showPostDetails: "Show post details",
  showPostCategories: "Show post categories",
  addCategoryToFilter: "Add this category ({postCategory}) to the filter",
  showPostSharing: "Show post sharing options",
  shareWith_twitter: "Share with Twitter",
  shareWith_facebook: "Share with Facebook",
  shareWith_telegram: "Share with Telegram",
  shareWith_linkedIn: "Share with LinkedIn",
  shareWith_blogger: "Share with Blogger",
  goToNextPost: "Go to next post",
  goToPreviousPost: "Go to previous post",
  goToFirstPost: "Go to first post",
  goToLastPost: "Go to last post",
  markPostAsUnread: "Mark as unread",
  markPostAsRead: "Mark as read",
  markPostAsReadLater: "Mark as read-later",
  unmarkPostAsReadLater: "Unmark as read-later",
  starThisPost: "Star this post",
  unstarThisPost: "Un-star this post",
  openOriginalArticle: "Open original article",
  description: "DESCRIPTION",
  contentsNofM: "CONTENTS ({n}/{m})",
  links: "LINKS",
  postComments: "COMMENTS",
  author: "AUTHOR",
  authors: "AUTHORS",
  updatedColon: "UPDATED:",
  publishedColon: "PUBLISHED:",
  contributors: "CONTRIBUTORS",
  // settings
  accountSettings: "ACCOUNT SETTINGS",
  usernameColon: "USERNAME:",
  emailAddress: "Email Address",
  emailAddressColon: "EMAIL ADDRESS:",
  applyChanges: "Apply Changes",
  deactivateYourAccount: "Deactivate Your Account",
  downloadYourData: "Download Your Data",
  permanentlyDeleteYourAccount: "Permanently Delete Your Account",
  sendPasswordResetEmail: "Send Password Reset Email",
  resetPassword: "Reset Password",
  emailNotifications: "Email Notifications",
  updateNotificationPreferences: "Update Notification Preferences",
  enableAccountAlertsNotifications:
    "Enable this option to receive account alerts and maintenance notifications.",
  enableProductNotifications:
    "Enable this option to receive occasional emails about production notifications and new features.",
  enableSelectedNotifications: "Enable Selected Notifications",
  yourSubscriptionWasCanceled:
    "Your subscription was canceled, and will not renew.",
  currentPeriod: "CURRENT PERIOD",
  endedAt: "ENDED AT",
  willEndAt: "WILL END AT",
  statusColon: "STATUS:",
  amountDueColon: "AMOUNT DUE:",
  amountPaidColon: "AMOUNT PAID:",
  amountRemainingColon: "AMOUNT REMAINING:",
  customerEmailAddressColon: "CUSTOMER EMAIL ADDRESS:",
  customerNameColon: "CUSTOMER NAME:",
  invoiceUrlColon: "INVOICE URL:",
  productColon: "PRODUCT:",
  mostRecentInvoice: "MOST RECENT INVOICE",
  clickHere: "Click here",
  cancelSubscription: "Cancel subscription",
  resumeSubscription: "Resume subscription",
  supportFeedGears: "Support FeedGears RSS",
  pleaseConsiderSubscribing:
    "Please consider subscribing to FeedGears.  We are supported 100% by the user community.",
  checkout: "Checkout",
  settingsUpdated: "Settings updated",
  updateLightTheme: "Click here to save your changes to the light theme",
  updateDarkTheme: "Click here to save your changes to the dark theme",
  themeSettingsUpdated: "Theme settings updated",
  opmlExportDownloaded: "OPML export downloaded",
  yourSubscriptionWasCanceledClickToResume:
    "Your subscription was canceled.  To resume, click 'Resume Subscription' on this page.",
  yourSubscriptionWasResumed: "Your subscription was resumed",
  subscriptionStatus:
    "Your subscription is currently {status}.  It began at {started}.",
  // docs
  feedGearsDocumentation: "FEEDGEARS DOCUMENTATION",
  // api
  feedGearsApi: "FEEDGEARS API",
  // order confirmation
  thankYouForYourOrder: "THANK YOU FOR YOUR ORDER",
  yourOrderIsConfirmed: "Your order is confirmed.",
  clickHereToReturnToTheApp: "Click here to return to the app.",
  // verification callback
  thanksForVerifying:
    "Thanks for verifying!  Your account status has been updated.",
  // privacy policy
  feedGearsPrivacyPolicy: "FEEDGEARS PRIVACY POLICY",
  whatInformationDoWeCollect: "What information do we collect?",
  whatWeCollectSummary:
    "We collect personal information that you provide to us.",
  whatWeCollectDetails:
    "We collect personal information that you voluntarily provide to use when you register on FeedGears, express an interest in obtaining information about us or FeedGears, when you participate in activities on FeedGears, or otherwise when you contact us.",
  whatWeCollectImportantDetails: "We do not process sensitive information.",
  whatWeCollectFurtherDetails:
    "All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.",
  someCollectionIsAutomatic: "Some information is automatically collected",
  automaticCollectionDetails:
    "Some information--such as your Internet Protocol (IP) address and/or browser and device characteristics--is collected automatically when you visit FeedGears.  This information (operating system, language preferences, referring URLs, device name, country, location, information about how and when you use FeedGears, and other technical information) does not reveal your specific identity (like your name or contact information) but may include device and usage information.  This information is primarily needed to maintain the security and operation of FeedGears, and for our internal analytics and reporting purposes.",
  howDoWeProcess: "How do we process your information?",
  howDoWeProcessSummary:
    "We process your information to provide, improve, and administer FeedGears, communicate with you, for security and fraud prevention, and to comply with law.  We may also process your information for other purposes with your consent.",
  socialLogins: "Social logins",
  socialLoginsSummary:
    "FeedGears offers you the ability to register and login using your third-party social media account details (like Google or Github logins).  Where you choose to do this, we will receive certain profile information about you from your social media provider.  The profile information we receive may vary depending on the social media provider concerned, but will often include your name, email address, and profile picture, as well as other information you choose to make public on such a social media platform.",
  socialLoginsDetails:
    "We will use the information we receive only for the purposes that are described in this privacy notice or that are othrerwise made clear to you on FeedGears.  Please note that we do not control, and are not responsible for, other uses of your personal information by your third-party social media provider.  We recommend that you review their privacy notice to understand how they collect, use, and share your personal infromation, and how you can set your privacy preferences on their sites and apps.",
  internationalInformationTransfers: "International information transfers",
  internationalInformationTransfersSummary:
    "We may transfer, store, and process your information in countries other than your own.",
  internationalInformationTransfersDetails:
    "Our servers are located in the United States.  If you are acessing FeedGears from outside the United States, please be aware that your information may be transferred to, stored, and processed by us in our facilities and by those of third-parties with whom we may share your personal information, in the United States and other countries.",
  internationalInformationTransfersDetailsFurther:
    "If you are a resident in the European Economic Area (EAA) or United Kingdom (UK), then these countries may not necessarily have data protection laws or other simliar laws as comprehensive as those in your country.  We will take all necessary measures to protected your personal information in accordance with this privacy notice and applicable law. ",
  whatAreYourPrivacyRights: "What are your privacy rights?",
  yourPrivacyRightsSummary:
    "You may review, change, or terminate your account at any time.",
  yourPrivacyRightsDetails:
    "We will not distribute your personal information to outside parties without your consent.",
  yourConsent: "Your consent",
  yourConsentSummary:
    "By using our site or apps, you consent to our privacy policy.",
  doWeMakeUpdates: "Do we make updates to this notice?",
  doWeMakeUpdatesSummary:
    "Yes, we will update this notice as necessary to stay compliant with relevant laws.",
  howCanYouContactUs: "How can you contact us about this notice?",
  // aria labels
  switchModeAriaLabel: "Switch to light or dark theme",
  goToSettingsAriaLabel: "Go to account settings",
  shareWith_twitter_ariaLabel: "Share with Twitter",
  shareWith_facebook_ariaLabel: "Share with Facebook",
  shareWith_telegram_ariaLabel: "Share with Telegram",
  shareWith_linkedIn_ariaLabel: "Share with LinkedIn",
  shareWith_blogger_ariaLabel: "Share with Blogger",
  // image alts
  queuePageScreenshot: "FeedGears queue page screenshot",
  queueLogoImage: "Queue logo image",
  feedLogoImage: "Feed logo image",
  rssLogo: "RSS logo",
  postThumbnailImage: "Post thumbnail image",
  postEnclosureImage: "Post enclosure image",
  postITunesImage: "Post iTunes image",
  postMediaContentImage: "Post media content image",
  postMediaThumbnail: "Post media thumbnail",
  oAuth2ProfileImage: "OAuth2 profile image",
  defaultOAuth2ProfileImage: "Default OAuth2 profile image",
}

export default en;
