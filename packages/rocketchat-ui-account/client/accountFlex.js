Template.accountFlex.events({
	'click [data-action="back"]'() {
		SideNav.closeFlex();
	}
});

Template.accountFlex.helpers({
	allowUserProfileChange() {
		return RocketChat.settings.get('Accounts_AllowUserProfileChange');
	},
	menuItem(name, icon, section, group) {
		return {
			name: t(name),
			icon,
			pathSection: section,
			pathGroup: group,
			darken: true
		};
	}
});
