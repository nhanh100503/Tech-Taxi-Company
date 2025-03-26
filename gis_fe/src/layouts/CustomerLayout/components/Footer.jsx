import React from "react";
import VTaxiLogo from "@assets/images/logo/VTaxi-100x100.ico";

const Footer = () => {
    return (
        <>

            <div class="bg-white shadow-[0_0_10px_10px_rgba(156,188,231,0.5)]  ">
                <footer class="bg-white py-10">
                    <div class="container mx-auto px-4">
                        <div class="grid grid-cols-1 md:grid-cols-6 gap-8">
                            <div class="col-span-1 md:col-span-2">
                                <img alt="Grab logo" class="mb-4" height="50" 
                                src={VTaxiLogo} width="100" className="rounded-xl" />

                                <p class="text-gray-700 mt-4">
                                    Công ty TNHH VTaxi
                                    <br />
                                    Địa chỉ: Tòa nhà Mapletree Business Centre, 1060 Nguyễn Văn Linh, Phường Tân Phong, Quận 7, Thành phố Hồ Chí Minh, Việt Nam.
                                    <br />
                                    Mã số doanh nghiệp: 0312650437 do Sở Kế Hoạch và Đầu Tư TP. Hồ Chí Minh cấp lần đầu ngày 14 tháng 02 năm 2014
                                    <br />
                                    Đại diện pháp luật: Alejandro Osorio
                                    <br />
                                    Chức vụ: Giám Đốc Điều Hành
                                </p>
                                <p class="text-gray-700 mt-4">
                                    Follow us and keep updated!
                                </p>
                                <div class="flex space-x-4 mt-2">
                                    <a class="text-gray-700" href="#">
                                        <i class="fab fa-facebook-f">
                                        </i>
                                    </a>
                                    <a class="text-gray-700" href="#">
                                        <i class="fab fa-instagram">
                                        </i>
                                    </a>
                                    <a class="text-gray-700" href="#">
                                        <i class="fab fa-twitter">
                                        </i>
                                    </a>
                                    <a class="text-gray-700" href="#">
                                        <i class="fab fa-tiktok">
                                        </i>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <h3 class="text-gray-900 font-semibold mb-4">
                                    Về VTaxi
                                </h3>
                                <ul class="text-gray-700 space-y-2">

                                    <li>
                                        Quan hệ đầu tư
                                    </li>
                                    <li>
                                        Địa chỉ
                                    </li>
                                    <li>
                                        Tin tưởng &amp; An toàn
                                    </li>
                                    <li>
                                        Tác động
                                    </li>
                                    <li>
                                        Tin tức
                                    </li>

                                </ul>
                            </div>
                            <div>
                                <h3 class="text-gray-900 font-semibold mb-4">
                                    Người dùng
                                </h3>
                                <ul class="text-gray-700 space-y-2">
                                    <li>
                                        Có gì mới?
                                    </li>
                                    <li>
                                        Di chuyển
                                    </li>



                                    <li>
                                        Tính năng mới
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 class="text-gray-900 font-semibold mb-4">
                                    Đối tác tài xế
                                </h3>
                                <ul class="text-gray-700 space-y-2">
                                    <li>
                                        Thông tin mới nhất
                                    </li>
                                    <li>
                                        Di chuyển
                                    </li>

                                    <li>
                                        Trung tâm tài xế
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 class="text-gray-900 font-semibold mb-4">
                                    Hợp tác cùng VTaxi
                                </h3>
                                <ul class="text-gray-700 space-y-2">
                                   
                                    <li>
                                        Hướng dẫn
                                    </li>
                                    <li>
                                        Financing
                                    </li>
                                    <li>
                                        Blog
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </footer>
            </div>

        </>
    )
}

export default Footer