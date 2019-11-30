class Rockets{
    constructor({mission_name,launch_year,launch_date_utc, rocket:{rocket_name:rocket_name}, launch_site:{site_name:site_name},links:{mission_patch:mission_patch}}){
        this.node = document.createElement('launch');
        this.node.className = 'rocket-node';

        this.mission_name = mission_name;
        this.launch_year = launch_year;
        this.launch_date_utc = launch_date_utc;
        this.rocket_name = rocket_name;
        this.site_name = site_name;
        this.mission_patch = mission_patch;

        this.txtName = document.createElement('h4');
        this.txtName.textContent = this.mission_name;

        this.txtYear = document.createElement('label');
        this.txtYear.textContent = this.launch_year;

        this.txtDate = document.createElement('label');
        this.txtDate.textContent = this.launch_date_utc;

        this.txtRocketName = document.createElement('label');
        this.txtRocketName.textContent = this.rocket_name;

        this.txtLaunchSite = document.createElement('label');
        this.txtLaunchSite.textContent = this.site_name;

        let txtMissionPatch = document.createElement('img');
        txtMissionPatch.src = mission_patch;
        txtMissionPatch.alt = mission_name + ' -img';
        txtMissionPatch.className = 'mission-img';

        this.node.appendChild(this.txtName);
        this.node.appendChild(this.txtYear);
        this.node.appendChild(this.txtDate);
        this.node.appendChild(this.txtRocketName);
        this.node.appendChild(this.txtLaunchSite);
        this.node.appendChild(txtMissionPatch);
    }

    getNode(){
        return this.node;
    }
}

export{
    Rockets
}