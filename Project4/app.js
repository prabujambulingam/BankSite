angular.module('BankApp', ['ui.router'])

  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/overview")

    $stateProvider
      .state('overview', {
        url: "/overview",
        templateUrl: "html/PageLayout.html"
      })
      .state('payments', {
        url: "/payments",
        templateUrl: "html/payments.html"
      })
      .state('investments', {
        url: "/investments",
        templateUrl: "html/investments.html"
      })
      .state('offerings', {
        url: "/offerings",
        templateUrl: "html/Exclusiveoffers.html"
      })
      .state('services', {
        url: "/services",
        templateUrl: "html/services.html"
      })

  }])

  .directive('panelDesign', function () {
    return {
      restrict: 'E',
      scope: {
        childinfo: '@info'
      },
      templateUrl: 'html/PanelDesign.html',
      link: function (scope, element, attributes) {
        scope.myObj = scope.getData();
        console.log(scope.myObj);
        scope.showminus = true;
        scope.showplus = false;
        scope.Signtoggle = function () {
          scope.showplus = scope.showplus ? false : true;
          scope.showminus = scope.showminus ? false : true;
        }
      },
      controller: function ($scope) {
        /*$scope.data=[];*/
        $scope.getData = function () {
          console.log('this is scope object name + $scope.childinfo');
          switch ($scope.childinfo) {
            case 'offers':
              $scope.data = {
                name: 'offers',
                title: 'PRE-QUALIFIED OFFERS',
                icon: 'ice-lolly-tasted',
                content: 'Exclusive access to dedicated service area Priority service at customer care and request Processing hubs',
                buttonName: "Check Offers"
              }; break;
            case 'help':
              $scope.data = {
                name: 'help',
                title: 'MAY I HELP YOU',
                icon: 'user',
                content: 'Exclusive online assistance facility',
                buttonName: "MAY I HELP U"
              }; break;
            case 'alerts':
              $scope.data = {
                name: 'Alerts',
                title: 'MY ALERTS & MESSAGES',
                icon: 'comment',
                content: 'Do not share your User ID/Password/OTP or URN with anyone, even if the person claims to be the employee of ICICI Bank',
                buttonName: "Check"
              }; break;
            case 'money':
              $scope.data = {
                name: 'money',
                title: 'MY MONEY',
                icon: 'euro',
                content: 'My Money now allows you to view both, your ICICI Bank as well as Non-ICICI Bank accounts online',
                buttonName: "Explore"
              }; break;
            case 'rewards':
              $scope.data = {
                name: 'rewards',
                title: 'REWARDS',
                icon: 'gift',
                content: 'Now view all your reward points at one place. View and redeem points from ICICI Bank Debit Card',
                buttonName: "REDEEM"
              }; break;
            case 'iwish':
              $scope.data = {
                name: 'iwish',
                title: 'IWISH',
                icon: 'leaf',
                content: 'Save when you want and still enjoy better interest rates',
                buttonName: "START NOW"
              }; break;
          }
          return $scope.data;
        }
      }

    };
  })


  .directive('welcomeDirective', function () {
    return {
      restrict: 'AEC',
      scope: {},
      templateUrl: 'html/welcomeback.html',
      controller: function ($scope) {
        $scope.welcome = {
          name: 'welcomeback',
          title: 'WELCOME BACK',
          icon: 'lock',
          username: 'Prabu Jambulingam',
          lastvisited: '19/07/2016'
        }
        $scope.getWelcomeData = function () {
          return $scope.welcome;
        }
      },
      link: function (scope, element, attributes) {
        scope.myObj = scope.getWelcomeData();
      }
    };
  })

  .directive('advertiseDirective', function () {
    return {
      restrict: 'E',
      templateUrl: 'html/AdvertisePanel.html',
      controller: function ($scope) {
        $scope.advertise = {
          ComponentName: 'addvertise',
          head1: 'Atel Pension Yojana',
          content1: 'A government offering with pension amount between Rs. 1000 -5000 pm. Invest in Atal Pension Yojana TODAY.',
          head2: 'Online Initial Public Offering',
          content2: 'You can now invest in IPO using your Internet Banking Account. Click here to invest.'
        };
        $scope.getAdvertiseData = function () {
          return $scope.advertise;
        }
      },
      link: function (scope, element, attributes) {
        scope.myObj = scope.getAdvertiseData();
      }
    };
  })

  .directive('shortcutDirective', function () {
    return {
      restrict: 'AEC',
      scope: {},
      templateUrl: 'html/Myshortcut.html',
      controller: function ($scope) {
        $scope.data = {
          name: 'shortcut',
          title: 'MY SHORTCUT',
          icon: 'star',
          shortcutlist: ['Mini/Detailed Statement', 'e-Statements', 'Funds Transfer', 'My Favourites', 'Bill Payments',
            'Quick Pay', 'Prepaid Recharge', 'Sovereign Gold Bonds',]
        }
        $scope.getData = function () {
          return $scope.data;
        }
      },
      link: function (scope, element, attributes) {
        scope.myObj = scope.getData();
        scope.showminus = true;
        scope.showplus = false;
        scope.Signtoggle = function () {
          scope.showplus = scope.showplus ? false : true;
          scope.showminus = scope.showminus ? false : true;
        }
      }
    };
  })

  .directive('overviewDirective', function () {
    return {
      restrict: 'AEC',
      scope: {},
      templateUrl: 'html/Overview.html',
      controller: function ($scope) {
        $scope.data1 = {
          name: 'Overview',
          title: 'OVERVIEW',
          icon: 'list-alt',
          Depositlist: [{ 'plan': 'CASH', 'amount': '1000' },
            { 'plan': 'CREDIT CARDS', 'amount': '1000' },
            { 'plan': 'LOANS', 'amount': '1000' },
            { 'plan': 'INVESTMENT', 'amount': '1000' },
            { 'plan': 'INSURANCE', 'amount': '1000' }]
        }
        $scope.getData = function () {
          return $scope.data1;
        }
      },
      link: function (scope, element, attributes) {
        scope.myObj = scope.getData();
        scope.showminus = true;
        scope.showplus = false;
        scope.Signtoggle = function () {
          scope.showplus = scope.showplus ? false : true;
          scope.showminus = scope.showminus ? false : true;
        }
      }
    };
  })

  .directive('navigationHeader', function () {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'html/NavigationHeader.html'
    };
  })


  .directive('navigationFooter', function () {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'html/NavigationFooter.html'

    };
  })

  .controller('BankController', ['$scope', function ($scope) {

  }]);