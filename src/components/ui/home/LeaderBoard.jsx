import user1 from "../../../assets/user/icon.jpg"

const LeaderBoard = () => {
    return (
        <div className="bg-white rounded-sm">
            <div className="h-full w-full p-4">
                <div className="flex flex-col gap-3 h-full w-full">
                    <h1 className="mb-3 font-bold text-xl text-[#505673]">Leader Board</h1>
                    <div className="grid grid-cols-1 gap-3">
                        <div className="flex items-center justify-between gap-x-2">
                            <div className="flex items-center gap-x-3">
                                <img src={user1} alt="" className="w-10 h-10" />
                                <div>
                                    <h3 className="font-bold">Rayhan Sheikh</h3>
                                    <p className="text-xs text-[#878CA8]">Frontend Developer</p>
                                </div>
                            </div>
                            <div className="text-[#7AAD69]">
                                <h3 className="font-bold">17 Points</h3>
                                <p className="text-[12px] text-right">+20%</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between gap-x-2">
                            <div className="flex items-center gap-x-3">
                                <img src={user1} alt="" className="w-10 h-10" />
                                <div>
                                    <h3 className="font-bold">Rayhan Sheikh</h3>
                                    <p className="text-xs text-[#878CA8]">Frontend Developer</p>
                                </div>
                            </div>
                            <div className="text-[#7AAD69]">
                                <h3 className="font-bold">17 Points</h3>
                                <p className="text-[12px] text-right">+20%</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between gap-x-2">
                            <div className="flex items-center gap-x-3">
                                <img src={user1} alt="" className="w-10 h-10" />
                                <div>
                                    <h3 className="font-bold">Rayhan Sheikh</h3>
                                    <p className="text-xs text-[#878CA8]">Frontend Developer</p>
                                </div>
                            </div>
                            <div className="text-[#7AAD69]">
                                <h3 className="font-bold">17 Points</h3>
                                <p className="text-[12px] text-right">+20%</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between gap-x-2">
                            <div className="flex items-center gap-x-3">
                                <img src={user1} alt="" className="w-10 h-10" />
                                <div>
                                    <h3 className="font-bold">Rayhan Sheikh</h3>
                                    <p className="text-xs text-[#878CA8]">Frontend Developer</p>
                                </div>
                            </div>
                            <div className="text-[#7AAD69]">
                                <h3 className="font-bold">17 Points</h3>
                                <p className="text-[12px] text-right">+20%</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between gap-x-2">
                            <div className="flex items-center gap-x-3">
                                <img src={user1} alt="" className="w-10 h-10" />
                                <div>
                                    <h3 className="font-bold">Rayhan Sheikh</h3>
                                    <p className="text-xs text-[#878CA8]">Frontend Developer</p>
                                </div>
                            </div>
                            <div className="text-[#7AAD69]">
                                <h3 className="font-bold">17 Points</h3>
                                <p className="text-[12px] text-right">+20%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeaderBoard