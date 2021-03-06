- 0.1.0-beta.1
  - Is Private gambit. Enabled per default on all threads.
  - Adding, editing, deleting recipients.
  - Event Post clarifying deleted, added users.
- 0.1.0-beta.2
  - Added badge on discussion if private.
  - Disallowing access to page if not a recipient.
  - Added private discussions to the index by default, will be a setting in the future.
- 0.1.0-beta.3
  - Fixes 500 error for guests.
- 0.1.0-beta.4
  - Fixed all discussions from showing up under all tags.
- 0.1.0-beta.5 and 0.1.0-beta.6
  - Includes adding groups as recipients
  - Composer window now shows recipient count.
  - Fixed issue with incorrect permission check, so outside of admins noone could create private discussions.
- 0.1.0-beta.7
  - Improved permission checks.
  - Added permission for adding groups as recipient.
- 0.1.0-beta.8
  - Auto approves all private discussions, removes need for approval by mods.
- 0.1.0-beta.9
  - Fixed allowing yourself to be removed, now adding yourself by default on new discussions if you click recipients.
  - Added locale polish.
- 0.1.0-beta.10
  - Access logic has been rewritten to fix some edge cases especially when working with the tags extension.
  - Now shows Private Discussions with flagged posts to mods and shows only flagged posts in those discussions as long as the flag exists.
- 0.1.0-beta.11
  - Fixes missing include that shows recipient labels and private discussion on discussion list.
  - Dried up code.
- 0.1.0-beta.12
  - Spanish locale.
  - Dutch locale.
  - Fix for incorrect import class of AbstractPolicy.
- 0.1.0-beta.13
  - Click event for mobile devices fixed by adding touch event.
- 0.1.0-beta.14
  - Added Italian locale.
  - Fix for mobile devices when trying to select recipients.
- 0.1.0-beta.15
  - Actual fix for mobile see previous version.
- 0.1.0-beta.16
  - Added control on user profile to start messaging user privately.
- 0.1.0-beta.17
  - Implemented is_private properties of core to hide etc.
  - Fixed a bug where deleting a recipient added through the profile card control was impossible.
  - Added missing translation for "send pm" control on profile card.
- 0.1.0-beta.18
  - Updates is_private property on all discussions that have been managed by Byobu.
- 0.1.0-beta.19
  - German translation added by Kakifrucht
  - Permission can now be configured per tag.
  - Fixed issue where only admins could set recipients.
  - Fixed issue where opening a private discussion from a user profile didn't make a discussion private :scream:.
  - Some improvements to less files and listeners. 
- 0.1.0-beta.20
  - Fixed #20; not able to create normal discussions due to incorrect recipients definition.
- 0.1.0-beta.21
  - Fixed #24; not adding current user when no recipients are defined.
- 0.1.0
  - Fixed #47; groups would not have access to discussion.
  - Updated polish language file.
  - Reformatted readme.
- 0.1.1
  - Fixed the recipient labels from not showing in certain situations.
- 0.2.0
  - Flarum beta 8 compatibility.
- 0.3.4
	- Private discussions user page fixes
		- Hid private discussions user page link from guests.
		- Fixed private discussions page breaking when user is loaded async.
