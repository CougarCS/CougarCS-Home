import BranchesCard, { BranchesCardActivity } from "./BranchesCard";
import branchesTabber from "./BranchesTabber.module.css";

// info sec
import { MdOutlinedFlag } from "react-icons/md";
import { IoCubeOutline } from "react-icons/io5";
import { MdOutlineHandyman } from "react-icons/md";

// tutoring
import { RiGraduationCapLine } from "react-icons/ri";
import { TbFileCheck } from "react-icons/tb";

import { LuBookText } from "react-icons/lu";

// web
import { SiCodemagic } from "react-icons/si";
import { RiComputerLine } from "react-icons/ri";
import { FaDiscord } from "react-icons/fa6";

export default function BranchesTabber()
{
    return (
        <div className={branchesTabber.tabber}>
            <BranchesCard title='Info. Sec' description='Info. Sec. is a branch dedicated to equipping members with the knowledge and skills to protect themselves in the digital world.' color='#05ACF6' colorSecondary='blue'>
                <BranchesCardActivity icon={<MdOutlinedFlag />} color="#05A8F0">
                    Capture The Flag (CTF's)
                </BranchesCardActivity>

                <BranchesCardActivity icon={<IoCubeOutline style={{ fill: "white", color: "white" }} />} color="#05A8F0">
                    Interactive Workshops
                </BranchesCardActivity>

                <BranchesCardActivity icon={<MdOutlineHandyman />} color="#05A8F0">
                    Hands-on Demos
                </BranchesCardActivity>
            </BranchesCard>

            <BranchesCard title='Tutoring' description='The Tutoring branch is here to provide free peer-to-peer tutoring for all students, offering services for a wide range of courses.' color='#10C054' colorSecondary='blue'>
                <BranchesCardActivity icon={<RiGraduationCapLine />} color="#10C054">
                    In-Person & Virtual Support
                </BranchesCardActivity>

                <BranchesCardActivity icon={<TbFileCheck />} color="#10C054">
                    Midterm & Final Reviews
                </BranchesCardActivity>

                <BranchesCardActivity icon={<LuBookText />} color="#10C054">
                    Wide range of course support
                </BranchesCardActivity>
            </BranchesCard>

            <BranchesCard title='Web Dev. Committee' branchTitle="Web Dev" description='The Web Dev. Committee is a branch fully-focused on developing experiences to help the club out, one line of code at a time.' color='#6F4FEB' colorSecondary='blue'>
                <BranchesCardActivity icon={<SiCodemagic />} color='#6F4FEB'>
                    CougarCS.com
                </BranchesCardActivity>

                <BranchesCardActivity icon={<RiComputerLine />} color='#6F4FEB'>
                    Web Dev Workshops
                </BranchesCardActivity>

                <BranchesCardActivity icon={<FaDiscord />} color='#6F4FEB'>
                    Discord Bot
                </BranchesCardActivity>
            </BranchesCard>
        </div>
    );
}