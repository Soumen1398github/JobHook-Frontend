import { Avatar, Button, Divider, Tabs } from "@mantine/core";
import { IconBriefcase, IconMapPin } from "@tabler/icons-react";
import AboutComp from "./AboutComp";
import CompanyJobs from "./CompanyJobs";
import CompanyEmployees from "./CompanyEmployees";

const Company = ()=>{
    return <div className="w-3/4">
        <div className="relative">
            <img className="rounded-t-2xl" src="/Profile/banner.jpg" alt="" />
            <img className="h-36 w-36 rounded-3xl bg-mine-shaft-950 absolute p-2 -bottom-1/4 left-5 border-8
            border-mine-shaft-950" src="/Icons/Google.png" alt=""/>
        </div>
        <div className="px-3 mt-14">
            <div className="text-3xl font-semibold flex justify-between">Google<Avatar.Group>
      <Avatar src="avatar.png" />
      <Avatar src="avatar1.png" />
      <Avatar src="avatar2.png" />
      <Avatar>+10K</Avatar>
    </Avatar.Group></div>
            <div className="flex gap-1 text-lg text-mine-shaft-300 items-center">
                <IconMapPin className="h-5 w-5" stroke={1.5}/> New York, United States
            </div>
        </div>
        <Divider my={"xl"} />
        <div>
        <Tabs variant="outline" radius="lg" defaultValue="about">
      <Tabs.List className="[&_button]:text-xl mb-5 font-semibold [&_button[data-active='true']]:text-bright-sun-400">
        <Tabs.Tab value="about">About</Tabs.Tab>
        <Tabs.Tab value="jobs">Jobs</Tabs.Tab>
        <Tabs.Tab value="employees">Employees</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="about"><AboutComp/></Tabs.Panel>
      <Tabs.Panel value="jobs"><CompanyJobs/></Tabs.Panel>
      <Tabs.Panel value="employees"><CompanyEmployees/></Tabs.Panel>
    </Tabs>
        </div>
    </div>
}
export default Company;