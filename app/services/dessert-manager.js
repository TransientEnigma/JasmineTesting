angular.module('desserts', []).factory('DessertManager',
    function () {
        return {
            dessertType : "cake",
            dessertSetting: function (setting) {
                if(setting) {
                    this.dessertType = setting;
                }
                return this.dessertType;
            }
        };
    });

// angular.module('desserts', []).factory('DessertManager', function () {
//     let dessertType = "cake";
//     let dessertSetting = function (setting = null) {
//         if (setting) {
//             dessertType = setting;
//         }
//         return dessertType;
//     }
//
//     return {
//         dessertSetting : dessertSetting
//     }
// });

// // Define the 'desserts' module
// angular.module('desserts', [])
//
//     // Create the 'DessertManager' factory
//     .factory('DessertManager', function() {
//         var dessertType = "cake"; // Initialize the dessertType property with a default value
//
//         // Define the dessertSetting function
//         function dessertSetting(setting) {
//             if (setting) {
//                 dessertType = setting; // Set the dessertType based on the provided setting
//             }
//             return dessertType; // Return the updated or default dessertType
//         }
//
//         // Return the factory object with the dessertSetting function
//         return {
//             dessertSetting: dessertSetting
//         };
//     });